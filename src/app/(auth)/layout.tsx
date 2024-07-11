import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "auth",
}

type Props = {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  return (
    <div>
      <h1> tariel </h1>
      {children}
    </div>
  )
}

export default AuthLayout
