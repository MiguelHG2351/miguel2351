import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/'

export default function Index() {
    return <>
    <Head>
        <meta name="description" content="Página principal Miguel2351"/>
        <title>Miguel2351 | Miguel Hernández Gaitan</title>
        <link rel="icon" href="/images/favicon.ico"/>
    </Head>
    <section className="description">
        <header className="profile-me">
            <h1>Miguel Angel Hernández Gaitan</h1>
            <b>FrontEnd Developer en tecnologías web</b>
        </header>
        <article className="project">
            <Link href="/about">
                <a className="card blue-filter">
                    <div className="principal relative">
                        <div className="info">
                            <div className="project-name">
                                <b>Proyecto:</b>
                                <p>ReactJS</p>
                            </div>
                            <div className="tech">
                                <b>Tecnologías:</b>
                                <p>ReactJS, NodeJS, MongoDB, Firebase</p>
                            </div>
                        </div>
                        <div className="background">
                            <img src="/images/tech2.png" className="responsive-img" alt="Logo de proyectos principales con HTML, CSS y JS"/>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href="/about">
                <a className="card yellow-filter">
                    <div className="principal relative">
                        <div className="info">
                            <div className="project-name">
                                <b>Proyecto:</b>
                                <p>CRUD</p>
                            </div>
                            <div className="tech">
                                <b>Tecnologías:</b>
                                <p>Express, NodeJS, MongoDB, Webpack</p>
                            </div>
                        </div>
                        <div className="background">
                            <img src="/images/tech3-1.png" className="responsive-img" alt="Logo de proyectos principales con HTML, CSS y JS"/>
                        </div>
                    </div>
                </a>
            </Link>
            <Link href="/graphql">
                <a className="card green-filter">
                    <div className="principal relative">
                        <div className="info">
                            <div className="project-name">
                                <b>Proyecto:</b>
                                <p>GraphQL</p>
                            </div>
                            <div className="tech">
                                <b>Tecnologías:</b>
                                <p>GraphQL, NodeJS, MongoDB, Webpack</p>
                            </div>
                        </div>
                        <div className="background">
                            <img src="/images/tech4-1.png" className="responsive-img" alt="Logo de proyectos principales con HTML, CSS y JS"/>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    </section>
    <style jsx>
        {styles}
    </style>
</>
}