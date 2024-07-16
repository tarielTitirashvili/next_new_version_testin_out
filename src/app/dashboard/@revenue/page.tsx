import React from 'react'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('@/components/cards/card'))

const UsersPage = () => {
  return <Card>Revenue Metrics</Card>
}

export default UsersPage
