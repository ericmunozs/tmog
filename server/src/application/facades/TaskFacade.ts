import { TaskFactory } from '../../domain/factories/TaskFactory'
import { TaskService } from '../../domain/services/TaskService'
import { Task } from '../../domain/models/Task'
import { TaskNotFoundError } from '../../domain/errors/TaskNotFoundError'

export class TaskFacade {
  private service: TaskService

  constructor(service: TaskService) {
    this.service = service
  }

  createTask({ title, description }: { title: string; description: string }): Task {
    const task = TaskFactory.create(title, description)
    return this.service.create(task)
  }

  getAllTasks(): Task[] {
    return this.service.findAll()
  }

  getTaskById(id: string): Task {
    const task = this.service.findById(id)
    if (!task) throw new TaskNotFoundError('Task not found')
    return task
  }

  updateTask(id: string, data: { title: string; description: string }): Task {
    const updated = this.service.update(id, data.title, data.description)
    if (!updated) throw new TaskNotFoundError('Task not found')
    return updated
  }

  deleteTask(id: string): void {
    const deleted = this.service.delete(id)
    if (!deleted) throw new TaskNotFoundError('Task not found')
  }
}
