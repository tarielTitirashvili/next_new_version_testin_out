import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import ErrorCausingButton from '@/components/buttons/buttonForErrorCheck'
import ServerComponentOne from '@/serverOnlyComponent/component'

export const metadata: Metadata = {
  title: 'store manager',
}

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ErrorCausingButton />
      <Link href={'/products'}>
        <h1>products</h1>
      </Link>
      {/* <ServerComponentOne /> 
      this will not work we should pass component with server 
      only code as a children props from parent client component 
      'layout in this case and then here' i do not know yet how 
      can i pass something in layout*/}
    </div>
  )
}

export default HomePage
