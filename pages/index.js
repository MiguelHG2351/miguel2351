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
            </Head>
            <Layout>
                <section className="description">
                    <header className="profile-me">
                        <img
                            src="/images/hero_image.png"
                            width="100%"
                            alt="Tecnologías Conocidas"
                        />
                        <h1>Miguel Hernández</h1>
                        <b>Desarrollo Web con Node y ReactJS</b>
                        <p style={{textAlign: 'left', margin: '0 20px', lineHeight: '1.6'}}>
                            A lo largo de mi carrera como FrontEnd, he tenido la
                            capacidad de crear proyectos para mejorar mi experiencia como FrontEnd Developer.
                        </p>
                    </header>
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
