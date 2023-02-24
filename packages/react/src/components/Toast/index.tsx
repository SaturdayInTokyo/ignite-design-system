import { X } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../Button'
import {
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from './style'

export interface ToastProps {
  buttonText: string
  title: string
  description: string
}

export function Toast({ buttonText, title, description }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastProvider swipeDirection="down">
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        {buttonText}
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastClose onClick={() => setOpen(false)}>
          <X weight="light" size={20} />
        </ToastClose>
        <ToastTitle>{title}</ToastTitle>
        {description && (
          <ToastDescription asChild>
            <span>{description}</span>
          </ToastDescription>
        )}
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
