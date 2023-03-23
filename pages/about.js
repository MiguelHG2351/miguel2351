/* eslint-disable @next/next/no-img-element */
import { useSelector } from "react-redux"
import Head from "next/head"
import Image from "next/image"

// import Card from "components/Card"
import Bubble from "components/bubble"
// #region Icons
import WebTech from "components/icons/WebTech"
import ReactLogo from "components/icons/ReactLogo"
import NodejsLogo from "components/icons/NodejsLogo"
import NextjsLogo from "components/icons/NextjsLogo"
import GraphQLLogo from "components/icons/GraphQL"
import PythonLogo from "components/icons/PythonLogo"
import ReduxLogo from "components/icons/ReduxLogo"
import NestLogo from "components/icons/NestLogo"
import ApolloLogo from "components/icons/ApolloLogo"
import ExpressLogo from "components/icons/ExpressLogo"
import FirebaseLogo from "components/icons/FirebaseLogo"
import FigmaLogo from "components/icons/FigmaLogo"
import PlaywrightLogo from "components/icons/PlaywrightLogo"
import GitLogo from "components/icons/GitLogo"
import MySQLLogo from "components/icons/MySQLLogo"
// #endregion
import styles from "styles/about"
import Link from "next/link"

export default function Index() {
  const { projects } = useSelector((state) => state)

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Quien soy? Soy un desarrollador de software que le gusta desarrollar aplicaciones web, APIs, aprender sobre data science y otras cosas que tenga que ver con la programación."
        />
        <title>MiguelHG2351 | Miguel Hernández Gaitan</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#09f" />
        <meta name="keywords" content="About, Portfolio" />
      </Head>
      <main className="px-[5%]">
        <section className="pt-10">
          <section className="hero md:grid md:grid-cols-2 md:gap-x-12">
            <article className="hero__content bar-content text-left">
              <h1 className="text-[1.75rem] font-bold">Miguel Hernández</h1>
              <div className="subdata my-4">
                <i className="material-icons subdata__icon">location_on</i>
                <span className="subdata__city">Managua, Nicaragua</span>
              </div>
              <b>Software Developer</b>
              <p>Edad: 18 años</p>
              <p className="my-4">
                Mi nombre es Miguel Hernández, soy un desarrollador de software
                que le gusta desarrollar aplicaciones web, APIs, aprender sobre
                data science y otras cosas que tenga que ver con la
                programación.s
              </p>
            </article>
            <article className="hero__header pt-4">
              <h2 className="text-2xl font-bold">Última cosa que he hecho</h2>
              <Link
                href="/blog/aws-amplify-1"
                className="mt-4 flex flex-col items-center gap-y-2 no-underline transition-transform hover:translate-y-4"
              >
                <Image
                  alt="Mi última publicación esta relacionada con el uso de un servicio de AWS por que me dio curiosidad y quise aprender algo de AWS"
                  src="/images/blog/latest.png"
                  width={384}
                  priority={true}
                  height={216}
                />
                <p className="text-center">Aprendiendo un poco de AWS :D</p>
              </Link>
            </article>
          </section>
          <section
            className="flex flex-col gap-y-4 py-4 md:flex-row md:gap-x-12"
            data-section="presentation"
          >
            <article className="md:flex-1">
              <h2 className="mb-4 text-2xl font-bold">Presentación</h2>
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
                He trabajado en proyectos de diferentes tamaños y complejidades.
                Desde pequeñas páginas web hasta aplicaciones web complejas, con
                la oportunidad de trabajar en proyectos que han requerido
                habilidades en HTML, CSS, JavaScript y herramientas y marcos de
                trabajo como React, Next.js, GraphQL y otros.
              </p>
              <section className="mt-4">
                <h2 className="text-2xl font-bold">Idiomas</h2>
                <div className="grid grid-cols-[auto_max-content] py-4 md:inline-grid md:w-[80%]">
                  <span className="left-grid-line relative after:left-[7ch] after:right-[1ch]">
                    Español
                  </span>
                  <span>Nativo</span>
                  <span className="left-grid-line relative after:left-[6ch] after:right-[1ch] after:bg-red-500">
                    Ingles
                  </span>
                  <span>A2</span>
                </div>
              </section>
            </article>
            <article className="text-2xl font-bold md:flex-1">
              <div className="web-techs">
                <h2>Front-End Developer</h2>
                <ul className="flex flex-wrap items-center justify-around py-4">
                  <li title="HTML, CSS y JavaScript">
                    <WebTech className="shrink-0" width={48} height={48} />
                  </li>
                  <li title="React.js">
                    <ReactLogo className="shrink-0" height={48} />
                  </li>
                  <li title="GraphQL">
                    <GraphQLLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Next.js">
                    <NextjsLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Redux">
                    <ReduxLogo className="shrink-0" height={48} />
                  </li>
                </ul>
              </div>
              <div className="testing">
                <h2>Testing</h2>
                <ul className="flex flex-wrap items-center justify-start py-4">
                  <li title="playwright">
                    <PlaywrightLogo className="shrink-0" height={48} />
                  </li>
                </ul>
              </div>
              <div className="backend">
                <h2>Backend</h2>
                <ul className="flex flex-wrap items-center justify-around py-4">
                  <li title="Nodejs">
                    <NodejsLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Python con Flask y Django">
                    <PythonLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Apollo">
                    <ApolloLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Express">
                    <ExpressLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Nestjs">
                    <NestLogo className="shrink-0" height={48} />
                  </li>
                  <li title="MySQL">
                    <MySQLLogo className="shrink-0" height={48} />
                  </li>
                </ul>
              </div>
              <div className="tools">
                <h2>Herramientas</h2>
                <ul className="flex flex-wrap items-center justify-around py-4">
                  <li title="Git">
                    <GitLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Firebase">
                    <FirebaseLogo className="shrink-0" height={48} />
                  </li>
                  <li title="Figma">
                    <FigmaLogo className="shrink-0" height={48} />
                  </li>
                </ul>
              </div>
            </article>
          </section>
          <section>
            <h2 className="text-2xl font-bold">Certificados</h2>
            <div className="grid grid-cols-4">
              <a
                target="_blank"
                href="https://www.credly.com/badges/a08234e3-6f21-41a1-a27f-5dc7e4835662?source=linked_in_profile"
                className="underline-none inline-block shrink-0"
                rel="noreferrer"
              >
                <Image
                  width={340}
                  height={340}
                  src="/images/certificados/azure.png"
                  alt="Certificación en AZ-900"
                />
              </a>
            </div>
          </section>
          <section className="project-principal bubble-wrapper spacing-container py-4">
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
          {/* <article className="project-all">
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
          </article> */}
        </section>
      </main>
      <style jsx>{styles}</style>
    </>
  )
}
