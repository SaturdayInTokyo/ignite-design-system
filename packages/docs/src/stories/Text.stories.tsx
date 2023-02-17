import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nihil aliquid totam, asperiores vero veniam ipsum a sed est minus odio fugiat aspernatur nam voluptatibus quidem tempora provident? Quis, sapiente!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
