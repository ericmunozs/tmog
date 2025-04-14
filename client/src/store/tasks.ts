import { defineStore } from 'pinia'
import * as api from '@/services/tasks'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as api.Task[],
    selectedTask: null as api.Task | null
  }),
  actions: {
    async fetchTasks() {
      this.tasks = await api.getTasks()
    },
    async fetchTask(id: number) {
      this.selectedTask = await api.getTask(id)
    },
    async create(task: Partial<api.Task>) {
      return api.createTask(task)
    },
    async update(id: number, task: Partial<api.Task>) {
      const updated = await api.updateTask(id, task)
      const index = this.tasks.findIndex(t => t.id === id)
      if (index !== -1) this.tasks[index] = updated
    },
    async remove(id: number) {
      await api.deleteTask(id)
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
})
