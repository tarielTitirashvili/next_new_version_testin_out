// "use client"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

type Props = {
  params: {
    slug: string[]
  }
}

export const generateMetadata = (props: Props): Metadata => {
  // this function can also be asynchronous and based on request we can return metadata and this does't works in client side apps
  return {
    title: `Docs ${props?.params?.slug ? props.params.slug[0] : ""}`,
  }
}

function Docs(props: Props) {
  return (
    <div>
      <h1>Docs</h1>
      {props?.params?.slug ? (
        <>
          {props.params.slug[0] && <p>wiving feature {props.params.slug[0]}</p>}
          {props.params.slug[1] && <p>wiving example {props.params.slug[1]}</p>}
        </>
      ) : (
        <>
          <Link style={{ display: "block" }} href={"docs/testFeature"}>
            test feature
          </Link>
          <Link href={"docs/testFeature/testExample"}>
            test feature with test example
          </Link>
        </>
      )}
    </div>
  )
}

export default Docs
