export interface Task {
  id: number
  title: string
  description: string
}

const API_URL = 'https://your-api.com'
const isMock = true

let mockTasks: Task[] = [
  { id: 1, title: 'Task 1', description: 'Description 1' },
  { id: 2, title: 'Task 2', description: 'Description 2' }
]

export const getTasks = async () => {
  if (isMock) return [...mockTasks]
  return await $fetch<Task[]>(`${API_URL}/tasks`)
}

export const getTask = async (id: number) => {
  if (isMock) return mockTasks.find(t => t.id === id)!
  return await $fetch<Task>(`${API_URL}/tasks/${id}`)
}

export const createTask = async (task: Partial<Task>) => {
  if (isMock) {
    const newTask = {
      id: Date.now(),
      title: task.title ?? 'No title',
      description: task.description ?? ''
    }
    mockTasks.push(newTask)
    return newTask
  }
  return await $fetch<Task>(`${API_URL}/tasks`, {
    method: 'POST',
    body: task
  })
}

export const updateTask = async (id: number, task: Partial<Task>) => {
  if (isMock) {
    const index = mockTasks.findIndex(t => t.id === id)
    if (index !== -1) {
      mockTasks[index] = { ...mockTasks[index], ...task }
      return mockTasks[index]
    }
    throw new Error('Task not found')
  }
  return await $fetch<Task>(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    body: task
  })
}

export const deleteTask = async (id: number) => {
  if (isMock) {
    mockTasks = mockTasks.filter(t => t.id !== id)
    return true
  }
  return await $fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE'
  })
}
