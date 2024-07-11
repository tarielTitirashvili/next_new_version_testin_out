import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import ErrorCausingButton from '@/components/buttons/buttonForErrorCheck'

export const metadata: Metadata = {
  title: 'store manager',
} 

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ErrorCausingButton />
      <Link href={'/products'}>
        <h1>products</h1>
      </Link>
    </div>
  )
}

export default HomePage
