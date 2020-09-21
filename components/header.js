import Link from 'next/link'
import { useState, useRef } from 'react'
import styles from '../styles/header'

export default function Header() {

    const [menu, setMenu] = useState('sidenav')
    const ref = useRef("overlay")

    function openMenu() {
        ref.current.classList.add("active")
        setMenu('sidenav active')
    }

    function closeMenu(e) {
        e.currentTarget.classList.remove("active")
        setMenu('sidenav')
    }


    return <header className="header-site">
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
            </div>
            <div className={menu}>
                <div className="user">
                    <div className="profile">
                        <div className="background">
                            <img src="/images/background.jpeg" className="responsive-img" alt="Imagen del fondo del usuario"/>
                        </div>
                        <div className="user-info">
                            <div className="avatar">
                                <img src="/images/minecraft.jpg" className="responsive-img circle" alt="Avatar del usuario"/>
                            </div>
                            <a className="info">
                                Miguel2351
                            </a>
                            <a className="info">
                                miguelhernandezgaitan13@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="menu">
                   <li><i className="material-icons">home</i>Inicio</li>
                   <li><i className="material-icons">build</i>Project</li> 
                   <li><i className="material-icons">book</i>Blog</li>
                   <li><i className="material-icons">info</i>About</li>
                   <li><i className="material-icons">perm_contact_calendar</i>Contact</li>
                </ul>
            </div>
        </div>
        <div className="overlay" ref={ref} onClick={closeMenu}></div>
        <style jsx>
            {
                styles
            }
        </style>
    </header>
}