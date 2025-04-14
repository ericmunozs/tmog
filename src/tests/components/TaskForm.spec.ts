import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('TaskForm.vue', () => {
  it('renders the form fields with initial values', async () => {
    const { default: TaskForm } = await import('../../components/TaskForm.vue')

    const wrapper = mount(TaskForm, {
      props: {
        modelValue: {
          title: 'Test title',
          description: 'Test description'
        }
      }
    })

    expect(wrapper.find('input').element.value).toBe('Test title')
    expect(wrapper.find('textarea').element.value).toBe('Test description')
  })

  it('emits submit event with form data when valid', async () => {
    const { default: TaskForm } = await import('../../components/TaskForm.vue')

    const wrapper = mount(TaskForm, {
      props: {
        modelValue: { title: '', description: '' }
      }
    })

    await wrapper.find('input').setValue('New Task')
    await wrapper.find('textarea').setValue('Task description')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')?.[0][0]).toEqual(
      expect.objectContaining({
        title: 'New Task',
        description: 'Task description'
      })
    )
  })
})
