import type { Meta, StoryObj } from '@storybook/vue3'

import MyForm from './MyForm.vue'

const meta: Meta<typeof MyForm> = {
  component: MyForm,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['signin', 'signup'],
    },
  },
}

export default meta
type Story = StoryObj<typeof MyForm>

export const Signin: Story = {
  render: (args) => ({
    components: { MyForm },
    setup() {
      return { args }
    },
    template: '<MyForm v-bind="args"></MyForm>',
  }),
  args: {},
}

export const Signup: Story = {
  render: (args) => ({
    components: { MyForm },
    setup() {
      return { args }
    },
    template: '<MyForm v-bind="args"></MyForm>',
  }),
  args: {
    type: 'signup',
  },
}
