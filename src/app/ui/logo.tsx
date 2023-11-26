import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Business
        </span>
      </div>
    </Link>
  )
}