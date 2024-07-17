import { whoIsGodHere } from '@/utils/server'
import React from 'react'

type Props = {}

const ServerOnlyComponent = (props: Props) => {
  const god = whoIsGodHere()
  return <div>ServerOnlyComponent {god}</div>
}

export default ServerOnlyComponent
