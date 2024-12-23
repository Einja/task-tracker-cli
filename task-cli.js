const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, 'tasks.json');

if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, JSON.stringify([]));
}