import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: 'profile',
}

const Profile = () => {
  console.log('profile page')
  return <div>Profile</div>
}

export default Profile
