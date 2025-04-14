export interface Task {
  id: string
  title: string
  description: string
}

const mockTasks = ref<Task[]>([])

export const useTaskService = () => {
  const config = useRuntimeConfig()
  const API_URL = config.public.apiBaseUrl
  const isMock = config.public.useMockService === 'true'

  const getTasks = async () => {
    if (isMock) return [...mockTasks.value]
    return await $fetch<Task[]>(`${API_URL}/api/tasks`)
  }

  const getTask = async (id: string) => {
    if (isMock) return mockTasks.value.find(t => t.id === id)!
    return await $fetch<Task>(`${API_URL}/api/tasks/${id}`)
  }

  const createTask = async (task: Partial<Task>) => {
    if (isMock) {
      const newTask = {
        id: String(Date.now()),
        title: task.title ?? 'No title',
        description: task.description ?? ''
      }
      mockTasks.value.push(newTask)
      return newTask
    }
    return await $fetch<Task>(`${API_URL}/api/tasks`, {
      method: 'POST',
      body: task
    })
  }

  const updateTask = async (id: string, task: Partial<Task>) => {
    if (isMock) {
      const index = mockTasks.value.findIndex(t => t.id === id)
      if (index !== -1) {
        mockTasks.value[index] = { ...mockTasks.value[index], ...task }
        return mockTasks.value[index]
      }
      throw new Error('Task not found')
    }
    return await $fetch<Task>(`${API_URL}/api/tasks/${id}`, {
      method: 'PUT',
      body: task
    })
  }
  
  const deleteTask = async (id: string) => {
    if (isMock) {
      mockTasks.value = mockTasks.value.filter(t => t.id !== id)
      return true
    }
    return await $fetch(`${API_URL}/api/tasks/${id}`, {
      method: 'DELETE'
    })
  }

  return {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
  }
}
