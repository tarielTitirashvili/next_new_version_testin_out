import dynamic from 'next/dynamic'
import React from 'react'

const Card = dynamic(() => import('@/components/cards/card'))

const UsersPage = () => {
  return <Card>User Analytics</Card>
}

export default UsersPage
