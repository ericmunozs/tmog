<script setup lang="ts">
  import TaskForm from '@/components/TaskForm.vue'
  import { useTasksStore } from '@/store/tasks'

  const store = useTasksStore()
  const notification = useNotification()

  const create = async (data: Task) => {
    try {
      await store.create(data)
      notification.created()
      navigateTo('/')
    } catch (error) {
      if (error instanceof Error) {
        notification.error(error.message)
      } else {
        notification.error('Error creating task')
      }
    }
  }
</script>

<template>
  <TaskForm submit-label="Create" @submit="create" />
</template>
