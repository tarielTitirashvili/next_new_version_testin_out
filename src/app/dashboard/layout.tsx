import React from "react"
import css from "./styles.module.css"
type TProps = {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}

const Layout = (props: TProps) => {
  const { children, notifications, revenue, users, login } = props
  const isAuth = false // for example this approach for auth check might be not actual
  return isAuth ? (
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
  ) : (
    <>{login}</>
  )
}

export default Layout
