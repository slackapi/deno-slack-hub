import {
  fetchCertifiedAppsSchema,
  greenText,
  isArrayProperty,
  isObjectProperty,
  redText,
  yellowText,
} from "./utils.ts";
import {
  assert,
  assertEquals,
  assertExists,
  assertIsError,
  assertTrue,
  IsExact,
  isHttpError,
  MockFetch,
} from "./dev_deps.ts";
import { ArrayProperty, ObjectProperty, Property } from "./types.ts";

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

Deno.test(`${fetchCertifiedAppsSchema.name}`, async (test) => {
  MockFetch.install();

  const expectedCause = "not found";
  const endpoint = "POST@/api/apps.certified.schema.list";

  await test.step("should fetch and return certified apps schemas", async () => {
    const certifiedAppsPayload = await Deno.readTextFile(
      "scripts/src/test/data/apps_certified_schema.json",
    );

    MockFetch.mock(endpoint, () => {
      return new Response(
        certifiedAppsPayload,
        {
          status: 200,
        },
      );
    });

    const actual = await fetchCertifiedAppsSchema();

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
    MockFetch.mock(endpoint, () => {
      return new Response(
        JSON.stringify({ ok: false, error: expectedCause }),
        {
          status: 200,
        },
      );
    });

    try {
      await fetchCertifiedAppsSchema();
      assertTrue(false, "There was no error thrown");
    } catch (error) {
      assertIsError(error);
      assertExists(error.message);
      assertEquals(expectedCause, error.cause);
    }
  });

  await test.step("should return error when fetch fails", async () => {
    MockFetch.mock(endpoint, () => {
      return new Response(
        expectedCause,
        {
          status: 404,
        },
      );
    });

    try {
      await fetchCertifiedAppsSchema();
      assertTrue(false, "There was no error thrown");
    } catch (error) {
      assertTrue(isHttpError(error));
      assertExists(error.message);
    }
  });
});
