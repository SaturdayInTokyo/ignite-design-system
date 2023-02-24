import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@saturdayintokyo-ignite-ui/react'

export default {
  title: 'Calendar/Toast',
  component: Toast,
  args: {
    buttonText: 'Click to open toast',
    title: 'Toast Title',
    description: 'Toast Description',
  },
  decorators: [
    (Story) => {
      return <div>{Story()}</div>
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
