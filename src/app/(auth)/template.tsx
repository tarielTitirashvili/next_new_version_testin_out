"use client"
// import { Metadata } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import css from "./styles.module.css"

// export const metadata: Metadata = {
//   title: {
//     default: "Auth",
//     template: "%s | Auth",
//   },
// }

type TRoutes = {
  title: string
  navLink: string
}

const navLinks: TRoutes[] = [
  { title: "Login", navLink: "/login" },
  { title: "Register", navLink: "/register" },
]

type Props = {
  children: React.ReactNode
}

function AuthLayout({ children }: Props) {
  const pathName = usePathname()
  const [input, setInput] = useState<string>()
  console.log(pathName)

  return (
    <div>
      <div className={css.navLinksContainer}>
        {navLinks.map(({ title, navLink }) => {
          const isActive = pathName.startsWith(navLink)
          return (
            <Link
              href={navLink}
              key={navLink}
              className={`${isActive ? css.active : ""}`}
            >
              {title}
            </Link>
          )
        })}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {children}
      {
        !pathName.startsWith('/forget-password') &&<Link
        href={'/forget-password'}
      >
        Forget Password?
      </Link>
      }
    </div>
  )
}

export default AuthLayout
