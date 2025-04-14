import { HttpError } from './HttpError'

export class TaskNotFoundError extends HttpError {
  constructor(id: string) {
    super(`Task with ID ${id} not found`, 404)
  }
}
