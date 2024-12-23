const fs = require("fs");
const path = require("path");
const Task = require("../models/task");

const tasksFilePath = path.join(__dirname, "../../tasks.json");

if (!fs.existsSync(tasksFilePath)) {
  fs.writeFileSync(tasksFilePath, JSON.stringify([]));
}

// Returns an array of Task objects
const readTasks = () => {
  const tasksData = JSON.parse(fs.readFileSync(tasksFilePath, "utf8") || "[]");
  return tasksData.map((task) => {
    const taskInstance = new Task(task.id, task.description, task.status);
    // Ensure createdAt and updatedAt remain unchanged
    taskInstance.createdAt = task.createdAt;
    taskInstance.updatedAt = task.updatedAt;
    return taskInstance;
  });
};

// Handles writing to the json file
const writeTasks = (tasks) =>
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));

function addTask(description) {
  const tasks = readTasks();
  const taskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const newTask = new Task(taskId, description);
  tasks.push(newTask);
  writeTasks(tasks);
  return newTask;
}

function updateTask(id, description) {
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === parseInt(id));
  if (!task) {
    throw new Error(`Task ${id} not found`);
  }
  task.update(description);
  writeTasks(tasks);
}

function deleteTask(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    throw new Error(`Task ${id} not found`);
  }
  const updatedTasks = tasks.filter((task) => task.id !== parseInt(id));
  writeTasks(updatedTasks);
}

function markTaskWip(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    throw new Error(`Task ${id} not found`);
  }
  tasks[taskIndex].markInProgress();
  writeTasks(tasks);
}

function markTaskDone(id) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) {
    throw new Error(`Task ${id} not found`);
  }
  tasks[taskIndex].markDone();
  writeTasks(tasks);
}

function listTasks(filter = null) {
  const tasks = readTasks();
  return filter ? tasks.filter((task) => task.status === filter) : tasks;
}

module.exports = { addTask, updateTask, deleteTask, listTasks, markTaskWip, markTaskDone};
