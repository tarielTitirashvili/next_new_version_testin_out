import React from "react"
import BackButton from "../../../components/buttons/backButton"

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
    </div>
  )
}

export default ProductId
