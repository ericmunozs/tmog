import express from 'express'
import taskRoutes from './infrastructure/routes/task.routes'
import { errorMiddleware } from './infrastructure/middlewares/error.middleware'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', taskRoutes)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}/api`)
})
