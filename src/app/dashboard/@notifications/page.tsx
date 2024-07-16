'use client'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'

const AsyncCard = dynamic(() => import('@/components/cards/asyncCard'))

const UsersPage = () => {
  return (
    <AsyncCard duration={1000}>
      <Link href={'dashboard/archived'}>Archived</Link>
      Notifications
    </AsyncCard>
  )
}

export default UsersPage
