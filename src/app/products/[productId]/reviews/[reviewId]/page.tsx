import React from "react"
import { notFound } from "next/navigation"
import Counter from "./counter"
type Props = {
  params: {
    productId: string
    reviewId: string
  }
}

const Review = (props: Props) => {
  if (+props.params.reviewId > 1000) notFound()
  return (
    <div>
      <h1>
        review about product {props.params.productId} is great review{" "}
        {props.params.reviewId}
      </h1>
      <Counter />
    </div>
  )
}

export default Review
