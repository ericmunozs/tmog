import { ValidationError } from "../errors/ValidationError"

export interface TaskProps {
  title: string
  description: string
  id?: string
  createdAt?: Date
}

export class Task {
  public readonly id: string
  public readonly createdAt: Date
  public title: string
  public description: string

  constructor({ title, description, id, createdAt }: TaskProps) {
    if (!title || title.trim() === '') {
      throw new ValidationError('Title is required')
    }

    this.id = id ?? crypto.randomUUID()
    this.createdAt = createdAt ?? new Date()
    this.title = title
    this.description = description
  }

  update(title: string, description: string) {
    if (!title || title.trim() === '') {
      throw new ValidationError('Title is required')
    }
    this.title = title
    this.description = description
  }
}
