# Task Tracker CLI

# NOTE: I used node for the sake of getting familiar with the framework.

How to use:

1. Clone this repository
2. Make sure your directory is in the root folder of the project
3. Run your commands using node src/task-cli.js arg1 arg2

## Features

- User can add, update, and delete tasks ({add, update, delete})
- User can view tasks based on inputted filters (list {done, todo, inprogress})

Below are the list of commands to help you navigate this project:
```
To add a task:
node src/task-cli.js add <description>

To remove a task:
node src/task-cli.js delete <id>

To update a task:
node src/task-cli.js update <id> <description>

To view a list of all available tasks:
node src/task-cli.js list

You can also filter the list of tasks based off status using the following arguments:
node src/task-cli.js list done
node src/task-cli.js list todo
node src/task-cli.js list in-progress
```