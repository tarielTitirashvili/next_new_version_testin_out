import React from "react"

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
    </div>
  )
}

export default Review
