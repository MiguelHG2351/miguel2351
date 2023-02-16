import { useSelector } from "react-redux";
import Head from "next/head";

import Card from "components/Card";
import Bubble from "components/bubble";
import styles from "styles/";

export default function Index() {
  const { projects } = useSelector((state) => state);

  return (
    <>
      <Head>
        <meta name="description" content="Página principal Miguel2351" />
        <title>MiguelHG2351 | Miguel Hernández Gaitan</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#09f" />
        <script src="/custom-properties.js" />
      </Head>
      <main className="container">
        <section className="description">
          <section className="hero">
            <header className="hero__image">
              <img
                src="/images/hero_image.png"
                width="100%"
                alt="Tecnologías Conocidas"
              />
            </header>
            <article className="hero__content bar-content">
              <h1>Miguel Hernández</h1>
              <b>
                Desarrollo Web con ReactJS | Redux | TailwindCSS | GraphQL |
                MongoDB
              </b>
              <p
                style={{
                  margin: "1.25rem",
                  lineHeight: "1.6",
                  fontSize: ".80rem",
                }}
              >
                A lo largo de mi carrera como FrontEnd, he tenido la capacidad
                de crear proyectos para mejorar mi experiencia como FrontEnd
                Developer.
              </p>
              <button className="btn hero__github">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="https://github.com/MiguelHG2351/"
                  rel="noreferrer"
                >
                  Ver GITHUB
                </a>
              </button>
            </article>
          </section>
          <section className="project-principal bubble-wrapper spacing-container">
            <h3>
              Estos son algunos de los proyectos principales que he realizado
            </h3>
            <Bubble />
            <div className="arrow-down-container">
              <svg
                className="arrow-down"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
                ></path>
              </svg>
            </div>
            <article className="projects">
              {projects.map((project) => (
                <div className="project" key={project.name}>
                  <div className="project-preview">
                    <img
                      src={`${project.image1x}`}
                      srcSet={`${project.image1x} 1x, ${project.image2x} 2x, ${project.image3x} 3x`}
                      className="responsive-img"
                      alt={`Proyecto ${project.name}`}
                    />
                  </div>
                  <div className="content-project">
                    <div className="title-project">
                      <a
                        target="_blank"
                        href={`${project.url}`}
                        rel="noreferrer"
                      >
                        {project.name}
                      </a>
                    </div>
                    <div className="description-project">
                      <p>{project.description}</p>
                    </div>
                    <div className="code">
                      <a
                        href={project.url}
                        target="_blank"
                        className="btn preview"
                        rel="noreferrer"
                      >
                        Ver Proyecto
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="btn github"
                        rel="noreferrer"
                      >
                        Ver Código
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </section>
          <article className="project-all">
            <Card
              proyect="ReactJS"
              technologies="ReactJS, NodeJS, MongoDB, Firebase"
              image="/images/tech2.webp"
              alt="Logo de proyectos principales con ReactJS, NodeJS, MongoDB, Firebase"
              url="/reactjs/"
              color="primary"
            />
            <Card
              proyect="CRUD"
              technologies="Express, NodeJS, MongoDB, Webpack"
              image="/images/tech3-1.webp"
              alt="Logo de proyectos principales con Express, NodeJS, MongoDB, Webpack"
              url="/crud/"
              color="warning"
            />
            <Card
              proyect="GraphQL"
              technologies="GraphQL, NodeJS, MongoDB, Webpack"
              image="/images/tech4-1.webp"
              alt="Logo de proyectos principales GraphQL, NodeJS, MongoDB, Webpack"
              url="/graphql/"
              color="secondary"
            />
          </article>
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  );
}
