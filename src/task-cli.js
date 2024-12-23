const {
  addTask,
  updateTask,
  deleteTask,
  listTasks,
} = require("./controllers/task-controller");
const { ensureFileExists } = require("./utils/task-utils");

ensureFileExists();

// starts getting list at 3rd argument in CLI
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "add":
    const addedTask = addTask(args[1]);
    console.log(`Task added successfully (ID : ${addedTask.id})`);
    break;
  case "update":
    updateTask(args[1], args[2]);
    break;
  case "delete":
    deleteTask(args[1]);
    break;
}
