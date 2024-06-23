import React from "react"
import Counter from "./counter"
type Props = {
  params: {
    productId: string
    reviewId: string
  }
}

const Review = (props: Props) => {
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
