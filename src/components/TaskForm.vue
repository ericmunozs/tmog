<script setup lang="ts">
  const emit = defineEmits(['submit'])
  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    modelValue: Object,
    submitLabel: { type: String, default: 'Guardar' }
  })

  const form = reactive({ ...props.modelValue })

  const handleSubmit = () => {
    const notification = useNotification()
    if (!form.title?.trim()) {
      notification.validationError('The title is required')

      return
    }
    emit('submit', form)
  }
</script>

<template>
  <UForm :state="form" @submit="handleSubmit">
    <UFormField label="Title" name="title">
      <UInput v-model="form.title" placeholder="Enter task title" />
    </UFormField>
    <UFormField label="Description" name="description">
      <UTextarea v-model="form.description" placeholder="Enter task description" />
    </UFormField>
    <UButton type="submit" :label="submitLabel" color="primary" />
  </UForm>
</template>
