import AsyncCard from '@/components/cards/asyncCard'
import Card from '@/components/cards/card'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'profile',
}

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Suspense fallback={<Card>Loading</Card>}>
        <AsyncCard duration={2800}>userData</AsyncCard>
      </Suspense>
      <Suspense fallback={<Card>Loading</Card>}>
        <AsyncCard duration={6800}>user posts</AsyncCard>
      </Suspense>
    </div>
  )
}

export default Profile
