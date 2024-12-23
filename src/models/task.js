class Task {
  constructor(id, description, status = "todo") {
    this.id = id;
    this.description = description;
    this.status = status;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  update(description) {
    this.description = description;
    this.updatedAt = new Date().toISOString();
  }

  markInProgress() {
    this.status = "in-progress";
    this.updatedAt = new Date().toISOString();
  }

  markDone() {
    this.status = "done";
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = Task;
