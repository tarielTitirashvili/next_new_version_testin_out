import React from "react"
import css from "./styles.module.css"
type TProps = {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
}

const Layout = (props: TProps) => {
  const { children, notifications, revenue, users } = props
  return (
    <div>
      {children}
      <div className={css.contentContainer}>
        <div className={css.usersAndRevenueContainer}>
          {users}
          {revenue}
        </div>
        {notifications}
      </div>
    </div>
  )
}

export default Layout
