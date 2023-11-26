import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/">
        <Image
            src="/business-logo.png"
            alt="Business"
            width={108}
            height={26}
            />
    </Link>
  )
}