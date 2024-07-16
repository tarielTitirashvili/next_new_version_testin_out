'use client'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('@/components/cards/card'))

const UsersPage = () => {
  return (
    <Card>
      <Link href={'dashboard/archived'}>Archived</Link>
      Notifications
    </Card>
  )
}

export default UsersPage
