import React from 'react'
import css from './styles.module.css'
import { redirect } from 'next/navigation'
import ColorThemProvider from '@/components/theme/colors'

type TProps = {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
}

const Layout = (props: TProps) => {
  const { children, notifications, revenue, users } = props
  const isAuth = true // for example this approach for auth check might be not actual
  if (!isAuth) return redirect('/login')
  return (
    <ColorThemProvider>
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
    </ColorThemProvider>
  )
}

export default Layout
