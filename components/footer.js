import Link from 'next/link'
import styles from "../styles/footer";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <h2>Gracias por Visitar!!</h2>
                <div className="iframe-container">
                    <iframe src="https://github-readme-stats.vercel.app/api?username=Miguelhg2351&show_icons=true&hide_border=true&title_color=fff&icon_color=ffffff&bg_color=09f&text_color=fff" frameBorder="0"></iframe>
                </div>
                <ul className="section-footer">
                    <div className="section-footer-container">
                        <li className="section-footer-link">
                            <Link href="/">
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li className="section-footer-link">
                            <Link href="/blog/">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li className="section-footer-link">
                            <Link href="/project">
                                <a>Proyectos</a>
                            </Link>
                        </li>
                        <li className="section-footer-link">
                            <Link href="/contact">
                                <a>Contactos</a>
                            </Link>
                        </li>
                        <li className="section-footer-link">
                            <Link href="/about">
                                <a>Acerca de</a>
                            </Link>
                        </li>
                    </div>
                </ul>
                <div className="social-media">
                    <a href="https://facebook.com/MiguelHG2351/"><i className="material-icons">facebook</i></a>
                    <a href="https://twitter.com/MiguelHG2351/" className="mt-5-px"><img src="/images/twitter.png" width="32px" alt="Icono de Twitter" title="Twitter: Miguel"/></a>
                    <a href="https://github.com/MiguelHG2351/"><img src="/images/github.png" alt="Icono de Github" title="Github: Miguel" width="32px"/></a>
                    <a href="mailto:miguelhernandezgaitan13@gmail.com" title="Enviar email"><i className="material-icons">email</i></a>
                </div>
                <div className="img-footer">
                    <img src="/images/logo-no-background.png" className="responsive-img" style={{verticalAlign: 'bottom'}} alt="Logo del sitio web"/>
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
