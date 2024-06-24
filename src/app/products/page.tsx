import React from "react"
import Link from "next/link"
import BackButton from '@/components/buttons/backButton'

type Props = {}

const Products = (props: Props) => {
  return (
    <div>
      <span className="flex items-center">
        <h1>
          <Link href={'products/1'}>Products list</Link>
        </h1>
        <h1>
          <Link href={'products/2'}>Product 1</Link>
        </h1>
        <h1>
          <Link href={'products/3'}>Product 2</Link>
        </h1>
        <h1>
          <Link href={'products/4'}>Product 3</Link>
        </h1>
        <h1>
          <Link href={'products/5'}>Product 4</Link>
        </h1>
      </span>
      <BackButton />
    </div>
  )
}

export default Products
