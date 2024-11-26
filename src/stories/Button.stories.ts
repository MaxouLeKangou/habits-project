import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../../components/MyButton.vue'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"></Button>',
  }),
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: false,
  },
}

export const Outline: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"></Button>',
  }),
  args: {
    label: 'Button',
    variant: 'outline',
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args"></Button>',
  }),
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: true,
  },
}
