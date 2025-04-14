import { Request, Response } from 'express'
import { TaskFacade } from '../../application/facades/TaskFacade'
import { TaskService } from '../../domain/services/TaskService'

const service = new TaskService()
const facade = new TaskFacade(service)

export class TaskController {
  static create(req: Request, res: Response): void {
    const { title, description } = req.body

    if (!title) {
      res.status(400).json({ error: 'Title is required' })
      return
    }

    try {
      const task = facade.createTask({ title, description })
      res.status(201).json(task)
    } catch (err: any) {
      res.status(500).json({ error: err.message })
    }
  }

  static findAll(_: Request, res: Response): void {
    const tasks = facade.getAllTasks()
    res.json(tasks)
  }

  static findOne(req: Request, res: Response): void {
    try {
      const task = facade.getTaskById(req.params.id)
      res.json(task)
    } catch (err: any) {
      res.status(404).json({ error: err.message })
    }
  }

  static update(req: Request, res: Response): void {
    const { title, description } = req.body

    if (!title) {
      res.status(400).json({ error: 'Title is required' })
      return
    }

    try {
      const task = facade.updateTask(req.params.id, { title, description })
      res.json(task)
    } catch (err: any) {
      res.status(404).json({ error: err.message })
    }
  }

  static delete(req: Request, res: Response): void {
    try {
      facade.deleteTask(req.params.id)
      res.status(204).send()
    } catch (err: any) {
      res.status(404).json({ error: err.message })
    }
  }
}
