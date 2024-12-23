const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../../tasks.json');

const ensureFileExists = () => {
    if (!fs.existsSync(tasksFilePath)) {
        fs.writeFileSync(tasksFilePath, JSON.stringify([]));
    }
};

module.exports = { ensureFileExists };