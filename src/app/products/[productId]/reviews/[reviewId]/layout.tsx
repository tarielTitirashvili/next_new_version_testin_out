import React from "react"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div>
      {children}
      <h2>nested Layout will not completely overwrite parent layouts it will be their addition</h2>
    </div>
  )
}

export default Layout
