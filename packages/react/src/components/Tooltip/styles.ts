import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  marginTop: '$6',
})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$gray100',
  fontFamily: '$default',
  paddingTop: '$3',
  paddingBottom: '$3',
  paddingLeft: '$4',
  paddingRight: '$4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  fontSize: '$sm',
  marginTop: -20,
  marginBottom: -20,
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipArrow = styled(Tooltip.Arrow, {
  marginTop: 20,
  marginBottom: -16,
})
