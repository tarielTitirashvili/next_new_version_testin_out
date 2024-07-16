import React from 'react'
import dynamic from 'next/dynamic'

const AsyncCard = dynamic(() => import('@/components/cards/asyncCard'))

const UsersPage = () => {
  return <AsyncCard duration={7800}>Revenue Metrics</AsyncCard>
}

export default UsersPage
