<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

  import { useTasksStore } from '@/store/tasks'
  const store = useTasksStore()
  const notification = useNotification()
  const isLoading = ref(true)
  await store.fetchTasks()
  isLoading.value = false
  
  const UButton = resolveComponent('UButton')
  
  const updateTask = (task: Task) => {
    navigateTo(`/tasks/${task.id}`)
  }

  const removeTask = (task: Task) => {
    store.remove(task.id)
    notification.deleted()
  }

  function getDropdownActions(task: Task): DropdownMenuItem[] {
    return [
      {
        label: 'Edit',
        icon: 'i-lucide-edit',
        onClick: () => updateTask(task)
      },
      {
        label: 'Delete',
        icon: 'i-lucide-trash',
        color: 'error',
        onClick: () => removeTask(task)
      }
    ]
  }

  const columns: TableColumn<Payment>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
      size: 200,
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      id: 'action'
    }
  ]
</script>

<template>
  <UTable :data="store.tasks" :columns="columns" :loading="isLoading" loading-color="primary" loading-animation="carousel">
    <template #name-cell="{ row }">
      <div class="flex items-center gap-3">
        <div>
          <p class="font-bold text-(--ui-text-highlighted)">
            {{ row.original.title }}
          </p>
          <p class="font-medium">
            {{ row.original.description }}
          </p>
        </div>
      </div>
    </template>
    <template #action-cell="{ row }">
      <UDropdownMenu :items="getDropdownActions(row.original)">
        <UButton
          icon="i-lucide-ellipsis-vertical"
          color="neutral"
          variant="ghost"
          aria-label="Actions"
        />
      </UDropdownMenu>
    </template>
  </UTable>
  <UButton label="New task" class="mt-4" @click="$router.push('/tasks/new-task')" />
</template>
