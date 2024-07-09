"use client"
import React from "react"

type Props = {
  params: {
    slug: string[]
  }
}

function Docs(props: Props) {
  console.log(props.params.slug)
  return <div>Docs</div>
}

export default Docs
