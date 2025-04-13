export const useNotification = () => {
  const toast = useToast()

  const toastTemplate = (
    title: string,
    {
      color,
      icon,
      description
    }: { color?: "neutral" | "primary" | "secondary" | "success" | "info" | "warning" | "error"; icon?: string; description?: string } = {}
  ) => {
    toast.add({ title, color, icon, description })
  }

  return {
    created: () => toastTemplate('Task created successfully', { color: 'success' }),
    updated: () => toastTemplate('Task updated successfully', { color: 'success' }),
    deleted: () => toastTemplate('Task deleted successfully', { color: 'success' }),
    validationError: (errors: string | string[]) => {
      const message = Array.isArray(errors) ? errors.join('\n') : errors
      toastTemplate('Validation error', { color: 'error', description: message })
    },
    error: (msg = 'An error occurred') => toast.add({ title: msg, color: 'error' })
  }
}
