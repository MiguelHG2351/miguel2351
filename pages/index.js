import Head from 'next/head'
import styles from '../styles/'

export default function Index() {
    return <>
    <Head>
        <meta name="description" content="Página principal Miguel2351"/>
        <title>Home</title>
        <link rel="icon" href="/images/favicon.ico"/>
    </Head>
    <section className="description">
        <header className="profile-me">
            <h1>Miguel Angel Hernández Gaitan</h1>
            <b>FrontEnd Developer en tecnologías web</b>
        </header>
        <article className="project">
            <div className="principal relative">
                <div className="info">
                    <div className="project">
                        <b>Proyectos:</b>
                        <p>12</p>
                    </div>
                    <div className="tech">
                        <b>Tecnologías:</b>
                        <p>ReactJS, NodeJS, MongoDB</p>
                    </div>
                </div>
                <div className="background">
                    <img src="/images/tech2.png" className="responsive-img" alt="Logo de proyectos principales con HTML, CSS y JS"/>
                </div>
            </div>
        </article>
    </section>
    <style jsx>
        {styles}
    </style>
</>
}