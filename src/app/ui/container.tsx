import React from 'react'

type ContainerProps = {
    children: React.ReactNode
    }

export default function Container({ children }: ContainerProps) {
  return (
    <div className='mx-auto w-full max-w-1140px'>
        {children}
    </div>
  )
}