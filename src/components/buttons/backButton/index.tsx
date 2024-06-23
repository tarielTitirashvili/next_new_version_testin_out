"use client"

import { useRouter } from "next/navigation"
import React from "react"

type Props = {}

const BackButton = (props: Props) => {
  const router = useRouter()

  return <button onClick={router.back}>Back</button>
}

export default BackButton
