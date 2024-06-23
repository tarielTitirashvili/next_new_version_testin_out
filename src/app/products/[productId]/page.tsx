import React from "react"

type Props = {
  params: {
    productId: string
  }
}

const ProductId = (props: Props) => {

  return (
    <div>
      <h1>product details page {props.params.productId}</h1>
    </div>
  )
}

export default ProductId
