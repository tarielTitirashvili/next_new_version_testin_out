import React from 'react'
import css from '../card/styles.module.css'

type Props = {
  children: React.ReactNode
  duration: number
}

const AsyncCard = async (props: Props) => {
  const { children, duration } = props
  await new Promise((resolve) => setTimeout(resolve, duration))
  return (
    <div className={css.card}>
      <div className={css.cardDetails}>{children}</div>
    </div>
  )
}

export default AsyncCard
