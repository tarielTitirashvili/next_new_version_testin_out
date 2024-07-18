'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import css from './styles.module.css'
import { TRoute } from '@/app/layout'
import Link from 'next/link'

type TProps = {
  naRoutes: TRoute[]
  naRoutesLeft: TRoute[]
}

const Header = (props: TProps) => {
  const pathname = usePathname()

  const { naRoutes, naRoutesLeft } = props

  return (
    <div className={css.navContainer}>
      <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
        {naRoutes.map(({ navLink, title }) => {
          let isActive = pathname.startsWith(navLink)
          if (navLink === '/' && pathname !== '/') isActive = false
          return (
            <Link
              href={navLink}
              className={isActive ? css.active : ''}
              key={navLink}
            >
              {title}
            </Link>
          )
        })}
      </div>
      {naRoutesLeft.map(({ navLink, title }) => {
        let isActive = pathname.startsWith(navLink)
        if (navLink === '/' && pathname !== '/') isActive = false
        return (
          <Link
            href={navLink}
            className={isActive ? css.active : ''}
            key={navLink}
          >
            {title}
          </Link>
        )
      })}
    </div>
  )
}

export default Header
