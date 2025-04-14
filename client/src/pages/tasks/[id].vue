<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import TaskForm from '@/components/TaskForm.vue'
  import { useTasksStore } from '@/store/tasks'
  
  const store = useTasksStore()
  const route = useRoute()
  const notification = useNotifications()
  const id = String(route.params.id)

  await store.fetchTask(id)

  const update = async (data: Task) => {
    try {
      await store.update(id, data)
      notification.updated()
      navigateTo('/')
    } catch (error) {
      if (error instanceof Error) {
        notification.error(error.message)
      } else {
        notification.error('An unexpected error occurred')
      }
    }
  }
</script>

<template>
  <TaskForm v-if="store.selectedTask" submit-label="Update" :model-value="store.selectedTask" @submit="update" />
</template>
