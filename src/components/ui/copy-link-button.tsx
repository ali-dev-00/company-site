"use client"
import * as React from 'react'

interface CopyLinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  copiedLabel?: string
  copyLabel?: string
  timeoutMs?: number
}

export function CopyLinkButton({
  value,
  copiedLabel = 'Copied!',
  copyLabel = 'Copy',
  timeoutMs = 1600,
  className = '',
  ...rest
}: CopyLinkButtonProps) {
  const [copied, setCopied] = React.useState(false)
  React.useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), timeoutMs)
    return () => clearTimeout(id)
  }, [copied, timeoutMs])

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(e)
    if (copied) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch (err) {
      // swallow; could add toast
    }
  }

  return (
    <button
      type="button"
      aria-live="polite"
      aria-label={copied ? copiedLabel : copyLabel}
      onClick={onClick}
      className={"text-xs px-3 py-1.5 border rounded-md transition " + (copied ? 'border-green-300 text-green-600 bg-green-50' : 'text-gray-600 border-gray-200 hover:bg-gray-50') + ' ' + className}
      {...rest}
    >{copied ? copiedLabel : copyLabel}</button>
  )
}
