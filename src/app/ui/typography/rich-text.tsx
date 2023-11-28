import React from 'react'

type RichTextProps = {
    children: React.ReactNode
    }

export default function RichText({ children }: RichTextProps) {
  return (
    <div>
        {children}
    </div>
  )
}