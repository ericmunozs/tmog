<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useTasksStore } from '@/store/tasks'
import type { Task } from '../services/tasks'

const store = useTasksStore()
const notify = useNotification()

await store.fetchTasks()

const handleCreate = async (task: Task) => {
  await store.create(task)
  notify.created()
  await store.fetchTasks()
}
</script>

<template>
  <div class="p-4 space-y-4">
    <h1 class="text-2xl font-bold">Tasks</h1>

    <TaskForm @submit="handleCreate" />

    <ul class="space-y-2">
      <li v-for="task in store.tasks" :key="task.id" class="border p-2 rounded">
        <strong>{{ task.title }}</strong>
        <small>{{ task.description }}</small>
      </li>
    </ul>
  </div>
</template>
