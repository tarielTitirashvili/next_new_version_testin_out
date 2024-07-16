import React from 'react'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('@/components/cards/card'))

function Default() {
  return <Card>Default</Card>
}

export default Default
