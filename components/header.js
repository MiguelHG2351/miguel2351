import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import styles from "styles/header";

export default function Header() {

    // States hooks
    const [menu, setMenu] = useState("sidenav");

    // react-redux Hooks
    const { theme } = useSelector(state => state)
    const disptach = useDispatch()

    //reference react
    const ref = useRef("overlay");

    /* Events */

    function changeTheme() {
        disptach({
            type: 'SET_THEME',
            theme: !theme.theme
        })
        console.log(theme)
    }


    function openMenu() {
        ref.current.classList.add("active");
        setMenu("sidenav active");
    }

    function closeMenu(e) {
        e.currentTarget.classList.remove("active");
        setMenu("sidenav");
    }

    // React hooks
    useEffect(() => {
        disptach({
            type: 'SET_THEME',
            theme: true
        })
        console.log(theme)
    }, [])

    return (
        <header className="header-site">
            <div className="container-header">
                <div className="nav-button">
                    <button className="btn" onClick={openMenu}>
                        <i className="material-icons">sort</i>
                    </button>
                </div>
                <div className="name">
                    <h3>
                        <Link href="/">
                            <a>Miguel2351</a>
                        </Link>
                    </h3>
                    <div className="options-user">
                        <button className={`btn-set-mode ${theme ? 'dark' : 'light'}`} onClick={changeTheme}>
                            <i className="material-icons">bedtime</i>
                            <i className="material-icons">brightness_7</i>
                        </button>
                    </div>
                </div>
                

                <div className={menu}>
                    <div className="user">
                        <div className="profile">
                            <div className="background">
                            </div>
                            <div className="user-info">
                                <div className="avatar">
                                    <img
                                        src="/images/minecraft.webp"
                                        className="responsive-img circle"
                                        alt="Avatar del usuario"
                                        loading="lazy"
                                    />
                                </div>
                                <a className="info" href="https://github.com/MiguelHG2351">Miguel2351</a>
                                <a className="info" href="mailto:miguelhernandezgaitan13@gmail.com">
                                    miguelhernandezgaitan13@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="menu">
                        <li className="list-menu">
                            <Link href="/">
                                <a>
                                    <i className="material-icons">home</i>Inicio
                                </a>
                            </Link>
                        </li>
                        <li className="list-menu">
                            <Link href="/project">
                                <a>
                                    <i className="material-icons">build</i>
                                    Project
                                </a>
                            </Link>
                        </li>
                        <li className="list-menu">
                            <Link href="/book">
                                <a>
                                    <i className="material-icons">book</i>Blog
                                </a>
                            </Link>
                        </li>
                        <li className="list-menu">
                            <Link href="/about">
                                <a>
                                    <i className="material-icons">info</i>About
                                </a>
                            </Link>
                        </li>
                        <li className="list-menu">
                            <Link href="/about">
                                <a>
                                    <i className="material-icons">
                                        perm_contact_calendar
                                    </i>
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="overlay" ref={ref} onClick={closeMenu}></div>
            <style jsx>{styles}</style>
        </header>
    );
}