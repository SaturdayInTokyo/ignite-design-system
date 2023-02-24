import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@saturdayintokyo-ignite-ui/react'

export default {
  title: 'Calendar/Tooltip',
  component: Tooltip,
  args: {
    trigger: 'open tooltip',
    content: 'tooltip content',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
