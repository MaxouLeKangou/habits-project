import type { Meta, StoryObj } from '@storybook/vue3'

import Input from '../../components/MyInput.vue'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'full'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args"></Input>',
  }),
  args: {
    label: 'Button',
    placeholder: 'Enter text',
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: '<Input v-bind="args"></Input>',
  }),
  args: {
    label: 'Button',
    placeholder: 'Desactivate',
    disabled: true,
  },
}
