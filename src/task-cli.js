const {
  addTask,
  updateTask,
  deleteTask,
  listTasks,
  markTaskWip,
  markTaskDone,
} = require("./controllers/task-controller");
const { ensureFileExists } = require("./utils/task-utils");

ensureFileExists();

// starts getting list at 3rd argument in CLI
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "add":
    const addedTask = addTask(args[1]);
    console.log(`Task added successfully (ID: ${addedTask.id})`);
    break;
  case "update":
    updateTask(args[1], args[2]);
    break;
  case "delete":
    deleteTask(args[1]);
    break;
  case "list":
    console.table(listTasks(args[1], args[2]));
    break;
  case "mark-in-progress":
    markTaskWip(args[1]);
    break;
  case "mark-done":
    markTaskDone(args[1]);
    break;
  default:
    console.log("Invalid command, view the README for a list of valid commands.");
    break;
}
