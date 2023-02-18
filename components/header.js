import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import styles from "components/styles/header"

export default function Header() {
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
    if (themeMenu === "options-user") {
      return setThemeMenu("options-user active")
    }
    setThemeMenu("options-user")
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
    <header className="header-site">
      <div className="container-header">
        <div className="name" onClick={closeMenuTheme}>
          <img src="/images/logo48x48.png" alt="Logo" />
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
        <div className="nav-button">
          <button className="btn" onClick={openMenu}>
            <i className="material-icons align-middle">menu</i>
          </button>
        </div>

        <div className={menu}>
          <div className="user">
            <div className="profile">
              <div className="background"></div>
              <div className="user-info">
                <div className="avatar">
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
                <a
                  className="info"
                  href="mailto:miguelhernandezgaitan13@gmail.com"
                >
                  miguelhernandezgaitan13@gmail.com
                </a>
              </div>
            </div>
          </div>
          <ul className="menu">
            <li className="list-menu" onClick={closeMenu}>
              <Link href="/">
                <div>
                  <i className="material-icons">home</i>Inicio
                </div>
              </Link>
            </li>
            <li className="list-menu" onClick={closeMenu}>
              <Link href="/projects">
                <div>
                  <i className="material-icons">build</i>
                  Project
                </div>
              </Link>
            </li>
            <li className="list-menu" onClick={closeMenu}>
              <a
                href="https://curso-javascript-miguelhg2351.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="material-icons">book</i>Blog
              </a>
            </li>
            <li className="list-menu" onClick={closeMenu}>
              <Link href="/about">
                <div>
                  <i className="material-icons">info</i>About
                </div>
              </Link>
            </li>
            <li className="list-menu" onClick={closeMenu}>
              <Link href="/about">
                <div>
                  <i className="material-icons">perm_contact_calendar</i>
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay" ref={overlay} onClick={closeMenu}></div>
      <style jsx>{styles}</style>
    </header>
  )
}
