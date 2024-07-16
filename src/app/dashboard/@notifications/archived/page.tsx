'use client'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('@/components/cards/card'))

function Archived() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <Link href={'/dashboard'}>Default</Link>
    </Card>
  )
}

export default Archived
