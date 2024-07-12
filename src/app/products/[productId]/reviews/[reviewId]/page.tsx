import React from "react"
import { notFound } from "next/navigation"
import Counter from "./counter"
import ErrorCausingButton from "@/components/buttons/buttonForErrorCheck"
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
      <ErrorCausingButton />
      <Counter />
    </div>
  )
}

export default Review
