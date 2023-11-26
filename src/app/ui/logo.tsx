import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Image
            src="/business-logo.png"
            alt="Business"
            width={108}
            height={26}
            />
      </div>
    </Link>
  )
}