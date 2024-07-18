import { whoIsGodHere } from '@/utils/server'
import React from 'react'
// import ServerComponentOne from '@/serverOnlyComponent/component'

type Props = {}

const ServerOnlyComponent = (props: Props) => {
  const god = whoIsGodHere()
  return (
    <div>
      ServerOnlyRoute
      {/* <ServerComponentOne /> */}
      {god}
    </div>
  )
}

export default ServerOnlyComponent
