import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"

import styles from "components/styles/header"

export default function Header() {
  const router = useRouter()

  // States hooks
  const [menu, setMenu] = useState("sidenav")
  const [themeMenu, setThemeMenu] = useState("options-user")

  // react-redux Hooks
  const { theme } = useSelector((state) => state)
  const disptach = useDispatch()

  //reference react
  const overlay = useRef("overlay")

  /* Events */

  function changeTheme() {
    disptach({
      type: "SET_THEME",
      theme: !theme.theme,
    })
    console.log(theme)
  }

  function openMenu() {
    overlay.current.classList.add("active")
    setMenu("sidenav active")
  }

  function closeMenu() {
    overlay.current.classList.remove("active")
    setMenu("sidenav")
  }

  function closeMenuTheme() {
    router.push("/")
    // if (themeMenu === "options-user") {
    //   return setThemeMenu("options-user active")
    // }
    // setThemeMenu("options-user")
  }

  // React hooks
  useEffect(() => {
    disptach({
      type: "SET_THEME",
      theme: true,
    })
    console.log(theme)
  }, [])

  return (
    <header className="header-site bg-primary p-2 shadow-light">
      <div className="m-auto flex max-w-[1330px] flex-wrap items-center md:w-5/6 md:gap-x-8">
        <div className="name h-min" onClick={closeMenuTheme}>
          <Image
            width={48}
            height={48}
            src="/images/logo48x48.png"
            className=" inline-block cursor-pointer rounded-full align-middle"
            alt="Logo"
          />
          <div className={themeMenu}>
            <button
              className={`btn-set-mode ${theme ? "dark" : "light"}`}
              onClick={changeTheme}
            >
              <i className="material-icons">bedtime</i>
              <i className="material-icons">brightness_7</i>
            </button>
          </div>
        </div>
        <div className="flex flex-grow-[2] items-center justify-end md:hidden">
          <button
            className="btn bg-transparent text-base text-white"
            onClick={openMenu}
          >
            <i className="material-icons align-middle text-2xl">menu</i>
          </button>
        </div>

        <div className={`${menu} h-full bg-primary md:h-auto`}>
          <div className="user">
            <div className="profile">
              <div className="background"></div>
              <div className="user-info">
                <div className="avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src="/images/minecraft.webp"
                    className="responsive-img circle"
                    alt="Avatar del usuario"
                    loading="lazy"
                  />
                </div>
                <a className="info" href="https://github.com/MiguelHG2351">
                  Miguel2351
                </a>
                <a className="info" href="mailto:miguelhgaitan2351@gmail.com">
                  miguelhgaitan2351@gmail.com
                </a>
              </div>
            </div>
          </div>
          <ul className="menu flex flex-col items-stretch md:flex-row md:items-baseline md:gap-x-3">
            <li onClick={closeMenu}>
              <Link
                className="inline-block w-full py-3 px-2 text-sm hover:rounded-md hover:bg-indigo-600"
                href="/"
              >
                Home
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                className="inline-block w-full py-3 px-2 text-sm hover:rounded-md hover:bg-indigo-600"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                className="inline-block w-full py-3 px-2 text-sm hover:rounded-md hover:bg-indigo-600"
                href="/blog"
                rel="noreferrer"
              >
                Blog
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link
                className="inline-block w-full py-3 px-2 text-sm hover:rounded-md hover:bg-indigo-600"
                href="/about"
              >
                About
              </Link>
            </li>
            <li onClick={closeMenu}>
              <a
                className="inline-block w-full py-3 px-2 text-sm hover:rounded-md hover:bg-indigo-600"
                href="mailto:miguelhgaitan2351@gmail.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay" ref={overlay} onClick={closeMenu}></div>
      <style jsx>{styles}</style>
    </header>
  )
}
