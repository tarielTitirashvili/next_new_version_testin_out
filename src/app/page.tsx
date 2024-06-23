import React, {cache} from "react"
import { Metadata } from "next"

type Props = {}

export const metadata: Metadata = {
  title: "store manager",
}

const HomePage = (props: Props) => {
  return <div>HomePage</div>
}

export default HomePage
