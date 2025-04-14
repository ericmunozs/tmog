import cors from 'cors'
import express from 'express'
import { errorMiddleware } from './infrastructure/middlewares/error.middleware'
import taskRoutes from './infrastructure/routes/task.routes'

const app = express()
const PORT = process.env.PORT || 3001

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)


app.use(express.json())
app.use('/api', taskRoutes)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}/api`)
})
