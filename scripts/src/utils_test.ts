import {
  fetchCertifiedApps,
  greenText,
  isArrayProperty,
  isFunctionRecordValid,
  isObjectProperty,
  redText,
  yellowText,
} from "./utils.ts";
import {
  assert,
  assertEquals,
  assertExists,
  assertFalse,
  assertIsError,
  assertTrue,
  IsExact,
  isHttpError,
  stub,
} from "./dev_deps.ts";
import {
  ArrayProperty,
  FunctionRecord,
  ObjectProperty,
  Property,
} from "./types.ts";

const stubFetch = (
  response: Response = new Response(
    "ok",
    {
      status: 200,
    },
  ),
  expected: {
    url?: string;
    init?: RequestInit;
  } = {},
): Disposable =>
  stub(
    globalThis,
    "fetch",
    (_url: string | URL | Request, options?: RequestInit) => {
      if (expected.url) {
        assertEquals(_url, expected.url);
      }
      if (expected.init) {
        if (expected.init.method) {
          assertEquals(options?.method, expected.init.method);
        }
        if (expected.init.body) {
          assertEquals(options?.body, expected.init.body);
        }
        if (expected.init.headers) {
          assertEquals(options?.headers, expected.init.headers);
        }
      }
      return Promise.resolve(response);
    },
  );

Deno.test("colored text remain consistent", () => {
  assertEquals("\x1b[92mtest\x1b[0m", greenText("test"));
  assertEquals("\x1b[91mtest\x1b[0m", redText("test"));
  assertEquals("\x1b[38;5;214mtest\x1b[0m", yellowText("test"));
});

Deno.test(`${isObjectProperty.name} distinguishes ArrayProperty from Property`, () => {
  const property: Property = {
    type: "object",
    properties: {
      myString: {
        type: "string",
        description: "test description",
        title: "String property",
      },
    },
    required: [],
    additionalProperties: true,
  };
  assert<IsExact<ObjectProperty, typeof property>>(true);
  assertEquals(true, isObjectProperty(property));
});

Deno.test(`${isArrayProperty.name} distinguishes ArrayProperty from Property`, () => {
  const property: Property = {
    type: "array",
    description: "test description",
    title: "ArrayFunctionProperty",
    items: {
      type: "string",
    },
  };
  assert<IsExact<ArrayProperty, typeof property>>(true);
  assertEquals(true, isArrayProperty(property));
});

Deno.test(`${fetchCertifiedApps.name}`, async (test) => {
  const expectedCause = "not found";
  const endpoint = "https://slack.com/api/apps.certified.schema.list";

  await test.step("should fetch and return certified apps schemas", async () => {
    const certifiedAppsPayload = await Deno.readTextFile(
      "scripts/src/test/data/apps_certified_schema.json",
    );
    using _fetchStub = stubFetch(
      new Response(
        certifiedAppsPayload,
        {
          status: 200,
        },
      ),
      {
        url: endpoint,
        init: { method: "POST" },
      },
    );

    const actual = await fetchCertifiedApps();

    assertEquals(1, actual.length);
    const actualApp = actual[0];
    assertEquals("pagerduty", actualApp.namespace);
    assertEquals(1, actualApp.functions.length);
    assertEquals("escalate_incident", actualApp.functions[0].callback_id);
    assertEquals(1, actualApp.functions[0].output_parameters.length);
    assertEquals(
      "#/types/assignment",
      actualApp.functions[0].output_parameters[0].type,
    );
    assert("assignment" in actualApp.types);
  });

  await test.step("should return error when slack response invalid", async () => {
    using _fetchStub = stubFetch(
      new Response(
        JSON.stringify({ ok: false, error: expectedCause }),
        {
          status: 200,
        },
      ),
      {
        url: endpoint,
        init: { method: "POST" },
      },
    );

    try {
      await fetchCertifiedApps();
      assertTrue(false, "There was no error thrown");
    } catch (error) {
      assertIsError(error);
      assertExists(error.message);
      assertEquals(expectedCause, error.cause);
    }
  });

  await test.step("should return error when fetch fails", async () => {
    using _fetchStub = stubFetch(
      new Response(
        expectedCause,
        {
          status: 404,
        },
      ),
      {
        url: endpoint,
        init: { method: "POST" },
      },
    );

    try {
      await fetchCertifiedApps();
      assertTrue(false, "There was no error thrown");
    } catch (error) {
      assertTrue(isHttpError(error));
      assertExists(error.message);
    }
  });
});

Deno.test(`${isFunctionRecordValid.name}`, async (test) => {
  const functionRecord: FunctionRecord = {
    id: "",
    callback_id: "",
    title: "",
    description: "",
    type: "",
    input_parameters: [],
    output_parameters: [],
    app_id: "",
  };

  await test.step("should return true when function record valid", () => {
    functionRecord.callback_id = "Test_callBack";

    assertTrue(isFunctionRecordValid(functionRecord));
  });

  await test.step("should return false when function record invalid", () => {
    functionRecord.callback_id = "$$:Invalid";

    assertFalse(isFunctionRecordValid(functionRecord));
  });
});
