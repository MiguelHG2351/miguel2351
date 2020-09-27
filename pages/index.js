import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";
import styles from "../styles/";

export default function Index() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Página principal Miguel2351"
                />
                <title>Miguel2351 | Miguel Hernández Gaitan</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <section className="description">
                <header className="profile-me">
                    <h1>Miguel Angel Hernández Gaitan</h1>
                    <b>FrontEnd Developer en tecnologías web</b>
                </header>
                <article className="project">
                    <Card
                        proyect="ReactJS"
                        technologies="ReactJS, NodeJS, MongoDB, Firebase"
                        image="/images/tech2.png"
                        alt="Logo de proyectos principales con ReactJS, NodeJS, MongoDB, Firebase"
                        url="/reactjs/"
                        />
                    <Card
                        proyect="CRUD"
                        technologies="Express, NodeJS, MongoDB, Webpack"
                        image="/images/tech3-1.png"
                        alt="Logo de proyectos principales con Express, NodeJS, MongoDB, Webpack"
                        url="/crud/"
                    />
                    <Card
                        proyect="GraphQL"
                        technologies="GraphQL, NodeJS, MongoDB, Webpack"
                        image="/images/tech4-1.png"
                        alt="Logo de proyectos principales GraphQL, NodeJS, MongoDB, Webpack"
                        url="/graphql/"
                    />
                </article>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
