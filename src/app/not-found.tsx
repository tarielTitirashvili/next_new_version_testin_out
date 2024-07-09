import BackButton from "@/components/buttons/backButton"
import React from "react"

type Props = {}

function NotFound({}: Props) {
  return (
    <div>
      <h2>Page Not Found</h2>
      &nbsp;
      <h1>404 Error</h1>
      <hr />
      <BackButton />
    </div>
  )
}

export default NotFound
