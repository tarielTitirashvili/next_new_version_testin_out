import dynamic from 'next/dynamic'
import React from 'react'

const AsyncCard = dynamic(() => import('@/components/cards/asyncCard'))

const UsersPage = () => {
  return <AsyncCard duration={4000}>User Analytics</AsyncCard>
}

export default UsersPage
