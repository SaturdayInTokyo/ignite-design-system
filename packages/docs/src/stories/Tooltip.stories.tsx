import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@saturdayintokyo-ignite-ui/react'

export default {
  title: 'Calendar/Tooltip',
  component: Tooltip,
  args: {
    trigger: 'Hover to open tooltip',
    content: 'Tooltip content',
  },
  decorators: [
    (Story) => {
      return <div>{Story()}</div>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
