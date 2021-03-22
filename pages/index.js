import Head from "next/head";
import Layout from "components/Layout/Layout";

import Card from "components/Card";
import styles from "styles/";

export default function Index() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Página principal Miguel2351"
                />
                <title>MiguelHG2351 | Miguel Hernández Gaitan</title>
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="theme-color" content="#09f" />
                <script src="/custom-properties.js" />
            </Head>
            <Layout>
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
                            <b>Desarrollo Web con Node y ReactJS</b>
                            <p
                                style={{
                                    margin: "20px",
                                    lineHeight: "1.6",
                                    fontSize: "14px",
                                }}
                            >
                                A lo largo de mi carrera como FrontEnd, he
                                tenido la capacidad de crear proyectos para
                                mejorar mi experiencia como FrontEnd Developer.
                            </p>
                            <button className="btn github">
                                <a className="btn btn-primary" target="_blank" href="https://github.com/MiguelHG2351/">Ver GITHUB</a>
                            </button>
                        </article>
                    </section>
                    <section className="project-principal bubble-wrapper spacing-container">
                        <h3>
                            Estos son algunos de los proyectos principales que
                            he realizado
                        </h3>
                        <svg
                            xmlns="http://w3.org/2000/svg"
                            width="43"
                            height="43"
                            viewBox="0 0 43 43"
                            fill="none"
                            className="bubble-draw"
                        >
                            <rect
                                x={4}
                                y={24}
                                width={24}
                                height={24}
                                transform="rotate(-45 4 21.5)"
                                stroke="#0099ff"
                                strokeWidth={4.9}
                            />
                        </svg>
                        <div className="arrow-down-container">
                            <svg className="arrow-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                        </div>
                        <article className="project">
                            <img src="/images/qonexia.png" srcSet="/images/qonexia.png 1x, /images/qonexia2x.png 2x, /images/qonexia3x.png 3x" className="responsive-img" alt="Proyecto Qonexia"/>
                            <img src="/images/flag-project.png" srcSet="/images/flag-project.png 1x, /images/flag-project2x.png 2x, /images/flag-project3x.png 3x" className="responsive-img" alt="Proyecto Qonexia"/>
                            <img src="/images/redaccion.png" srcSet="/images/redaccion.png 1x, /images/redaccion2x.png 2x, /images/redaccion3x.png 3x" className="responsive-img" alt="Proyecto Qonexia"/>
                        </article>
                    </section>
                    <article className="project">
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
            </Layout>
            <style jsx>{styles}</style>
        </>
    );
}
