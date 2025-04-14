import { Task } from "../models/Task"
import { ValidationError } from "../errors/ValidationError"

export class TaskFactory {
  static create(title: string, description: string): Task {
    if (!title || title.trim() === '') {
      throw new ValidationError('Title cannot be empty')
    }

    return new Task({ title, description })
  }
}
