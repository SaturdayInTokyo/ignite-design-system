import { Button } from '../Button'
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
  TooltipProvider,
} from './styles'

export interface TooltipProps {
  trigger: string
  content: string
}

export function Tooltip({ trigger, content }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <Button>{trigger}</Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="TooltipContent" sideOffset={5}>
            {content}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
