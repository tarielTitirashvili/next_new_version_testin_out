import Card from "@/components/cards/card"
import Link from "next/link"
import React from "react"

const UsersPage = () => {
  return (
    <Card>
      <Link href={"dashboard/archived"}>Archived</Link>
      Notifications
    </Card>
  )
}

export default UsersPage