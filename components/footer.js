import Link from "next/link"
import styles from "./styles/footer"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h2>Gracias por Visitar!!</h2>
        <div className="footer-info">
          <ul className="section-footer-container">
            <li className="section-footer-link">
              <Link href="/">Inicio</Link>
            </li>
            <li className="section-footer-link">
              <Link href="/blog/">Blog</Link>
            </li>
            <li className="section-footer-link">
              <Link href="/project">Proyectos</Link>
            </li>
            <li className="section-footer-link">
              <Link href="/contact">Contactos</Link>
            </li>
            <li className="section-footer-link">
              <Link href="/about">Acerca de</Link>
            </li>
          </ul>
          <div className="social-media">
            <a href="https://facebook.com/MiguelHG2351/">
              <i className="material-icons">facebook</i>
            </a>
            <a href="https://twitter.com/MiguelHG2351/" className="mt-5-px">
              <img
                src="/images/twitter.png"
                width="32px"
                alt="Icono de Twitter"
                title="Twitter: Miguel"
              />
            </a>
            <a href="https://github.com/MiguelHG2351/">
              <img
                src="/images/github.png"
                alt="Icono de Github"
                title="Github: Miguel"
                width="32px"
              />
            </a>
            <a
              href="mailto:miguelhernandezgaitan13@gmail.com"
              title="Enviar email"
            >
              <i className="material-icons">email</i>
            </a>
          </div>
          <div className="img-footer">
            <img
              src="/images/logo-no-background.png"
              loading="lazy"
              className="responsive-img"
              style={{ verticalAlign: "bottom" }}
              alt="Logo del sitio web"
            />
          </div>
        </div>
      </footer>
      <style jsx>{styles}</style>
    </>
  )
}
