'use client'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const ErrorCausingButton = (props: Props) => {
  const [shouldShowError, setShouldShowError] = React.useState<boolean>(false)
  const { children } = props
  const onClick = () => {
    setShouldShowError((prev) => !prev)
  }

  React.useEffect(() => {
    if (shouldShowError) {
      throw new Error('Expected Error ')
    }
  }, [shouldShowError])

  return (
    <button onClick={onClick}>{children ? children : 'throw error'}</button>
  )
}

export default ErrorCausingButton
