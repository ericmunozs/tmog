import { Task } from '../models/Task'

export class TaskService {
  private tasks: Task[] = []

  create(task: Task): Task {
    this.tasks.push(task)
    return task
  }

  findAll(): Task[] {
    return this.tasks
  }

  findById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id)
  }

  update(id: string, title: string, description: string): Task | undefined {
    const task = this.findById(id)
    if (task) {
      task.update(title, description)
      return task
    }
    return undefined
  }

  delete(id: string): boolean {
    const index = this.tasks.findIndex(t => t.id === id)
    if (index !== -1) {
      this.tasks.splice(index, 1)
      return true
    }
    return false
  }
}
