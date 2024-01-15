/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import CreateProject from "./functions/create_project.ts";
import CreateTodo from "./functions/create_todo.ts";
import CreateTodoList from "./functions/create_todo_list.ts";
import MarkTodoComplete from "./functions/mark_todo_complete.ts";
import MarkTodoPending from "./functions/mark_todo_pending.ts";

const Basecamp = {
  functions: {
    /**
     * @see The {@link https://api.slack.com/reference/connectors/basecamp/create_project CreateProject} documentation.
     */
    CreateProject,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/basecamp/create_todo CreateTodo} documentation.
     */
    CreateTodo,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/basecamp/create_todo_list CreateTodoList} documentation.
     */
    CreateTodoList,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/basecamp/mark_todo_complete MarkTodoComplete} documentation.
     */
    MarkTodoComplete,
    /**
     * @see The {@link https://api.slack.com/reference/connectors/basecamp/mark_todo_pending MarkTodoPending} documentation.
     */
    MarkTodoPending,
  },
} as const;

export default Basecamp;