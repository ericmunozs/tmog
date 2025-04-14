import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    selectedTask: null as Task | null
  }),
  actions: {
    async fetchTasks() {
      const { getTasks } = useTaskService()
      this.tasks = await getTasks()
    },
    async fetchTask(id: string) {
      const { getTask } = useTaskService()
      this.selectedTask = await getTask(id)
    },
    async create(task: Partial<Task>) {
      const { createTask } = useTaskService()
      return await createTask(task)
    },
    async update(id: string, task: Partial<Task>) {
      const { updateTask } = useTaskService()
      const updated = await updateTask(id, task)
      const index = this.tasks.findIndex(t => t.id === id)
      if (index !== -1) this.tasks[index] = updated
    },
    async remove(id: string) {
      const { deleteTask } = useTaskService()
      await deleteTask(id)
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})
