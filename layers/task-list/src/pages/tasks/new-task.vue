<script setup lang="ts">
  import TaskForm from '@/components/TaskForm.vue'
  import { useTasksStore } from '@/store/tasks'
import type { Task } from '../../services/tasks'

  const store = useTasksStore()
  const toast = useToast()
  const notification = useNotification()

  const create = async (data: Task) => {
    try {
      await store.create(data)
      notification.created()
      navigateTo('/')
    } catch (error) {
      toast.add({ title: 'Error creating task', description: error.message, color: 'red' })
    }
  }
</script>

<template>
  <TaskForm submit-label="Create" @submit="create" />
</template>
