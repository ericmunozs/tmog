import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'

const router = Router()

router.post('/tasks', TaskController.create)
router.get('/tasks', TaskController.findAll)
router.get('/tasks/:id', TaskController.findOne)
router.put('/tasks/:id', TaskController.update)
router.delete('/tasks/:id', TaskController.delete)

export default router
