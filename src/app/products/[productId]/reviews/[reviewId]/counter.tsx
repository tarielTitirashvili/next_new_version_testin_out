"use client"

import React, { useState } from "react"

type Props = {}

function Counter({}: Props) {
  const [counter, setCounter] = useState(0)
  console.log(counter)

  return (
    <div>
      <h1>count {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>add</button>
    </div>
  )
}

export default Counter
