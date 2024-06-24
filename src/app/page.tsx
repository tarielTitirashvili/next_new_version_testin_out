import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = {}

export const metadata: Metadata = {
  title: 'store manager',
}

const HomePage = (props: Props) => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href={'/products'}>
        <h1>products</h1>
      </Link>
    </div>
  )
}

export default HomePage
