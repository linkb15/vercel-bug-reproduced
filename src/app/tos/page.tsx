import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div>ToS</div>

      <Link href={'/'}>Home</Link>
      <Link href={'/disclaimer'}>Disclaimer</Link>
      <Link href={'/tos'}>ToS</Link>
    </div>
  )
}

export default Page
