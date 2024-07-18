import React from 'react'
import fs from 'fs'

const ServerComponentOne = () => {
  fs.readFileSync('src/componentsServer/component-one', 'utf-8')
  return <div>ServerComponentOne</div>
}

export default ServerComponentOne
