import Card from "@/components/cards/card"
import Link from "next/link"
import React from "react"

function Archived() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <Link href={"/dashboard"}>Default</Link>
    </Card>
  )
}

export default Archived
