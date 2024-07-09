import React from "react"
import BackButton from "../../../components/buttons/backButton"
import Link from "next/link"

type Props = {
  params: {
    productId: string
  }
}

const ProductId = (props: Props) => {
  return (
    <div>
      <h1>product details page {props.params.productId}</h1>
      <BackButton />
      <div>
        <h1>
          <Link href={`${props.params.productId}/reviews/2`}>review 1</Link>
        </h1>
        <h1>
          <Link href={`${props.params.productId}/reviews/3`}>review 2</Link>
        </h1>
        <h1>
          <Link href={`${props.params.productId}/reviews/4`}>review 3</Link>
        </h1>
        <h1>
          <Link href={`${props.params.productId}/reviews/5`}>review 4</Link>
        </h1>
      </div>
    </div>
  )
}

export default ProductId
