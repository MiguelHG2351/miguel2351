/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

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
        <meta name="keywords" content="miguelhg2351, Miguel2351" />
      </Head>
      <Script src="/custom-properties.js"></Script>
      <main className="px-[5%]">
        <section className="pt-10">
          <section className="hero md:grid md:grid-cols-2">
            <article className="hero__content bar-content px-5">
              <h1 className="font-bold text-[1.75rem]">Miguel Hernández</h1>
              <div className="subdata my-4">
                <i className="material-icons subdata__icon">location_on</i>
                <span className="subdata__city">Managua, Nicaragua</span>
              </div>
              <b>FrontEnd Developer en Tecnologías web</b>
              <p className="text-xs my-4">
                A lo largo de mi carrera como FrontEnd, he tenido la capacidad
                de crear proyectos para mejorar mi experiencia como FrontEnd
                Developer.
              </p>
              <a
                className="bg-primary text-dark py-2 px-4 rounded-md text-sm"
                target="_blank"
                href="https://github.com/MiguelHG2351/"
                rel="noreferrer"
              >
                Ver GitHub
              </a>
            </article>
            <article className="hero__header pt-4">
              <Image
                src="/images/hero_image.png"
                className="hero__image"
                width={720}
                height={480}
                priority={true}
                alt="Tecnologías Conocidas"
              />
            </article>
          </section>
          <section
            className="flex flex-col md:flex-row py-4"
            data-section="presentation"
          >
            <article className="md:flex-1">
              <h2 className="text-2xl mb-4 font-bold">Presentación</h2>
              <p className="text-sm">
                Durante los últimos 4 años, he estado trabajando constantemente
                en mejorar mis habilidades como FrontEnd Developer e investigar
                otras areas de tecnología.
              </p>
              <br />
              <p className="text-sm">
                A lo largo de mi carrera, he tenido la oportunidad de trabajar
                en una variedad de proyectos desafiantes y emocionantes, lo que
                me ha permitido desarrollar una amplia gama de habilidades
                técnicas y prácticas.
              </p>
              <br />
              <p className="text-sm">
                Durante mi tiempo como FrontEnd Developer, he trabajado en
                proyectos de diferentes tamaños y complejidades. Desde pequeñas
                páginas web hasta aplicaciones web complejas, he tenido la
                oportunidad de trabajar en proyectos que han requerido
                habilidades en HTML, CSS, JavaScript y herramientas y marcos de
                trabajo como React, Next.js, GraphQL y otros.
              </p>
            </article>
            <article className="md:flex-1 text-2xl mb-4 font-bold">
              <h2>Tecnologias y herramientas</h2>
            </article>
          </section>
          <section className="py-4 project-principal bubble-wrapper spacing-container">
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
