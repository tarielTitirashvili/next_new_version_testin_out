import React from "react"
import css from "./styles.module.css"

type TProps = {
  children: React.ReactNode
}

function Card(props: TProps) {
  const { children } = props
  return (
    <div className={css.card}>
      <div className={css.cardDetails}>{children}</div>
    </div>
  )
}

export default Card
