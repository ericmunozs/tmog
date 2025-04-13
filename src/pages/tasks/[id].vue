<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  import TaskForm from '@/components/TaskForm.vue'
  import { useTasksStore } from '@/store/tasks'
  
  const store = useTasksStore()
  const route = useRoute()
  const notification = useNotification()
  const id = Number(route.params.id)

  await store.fetchTask(id)

  const update = async (data: Task) => {
    try {
      await store.update(id, data)
      notification.updated()
      navigateTo('/')
    } catch (error) {
      toast.add({ title: 'Error updating task', description: error.message, color: 'red' })
    }
  }
</script>

<template>
  <TaskForm v-if="store.selectedTask" submit-label="Update" :model-value="store.selectedTask" @submit="update" />
</template>
