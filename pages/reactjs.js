import Head from "next/head";
import Card from "../components/Card";
import { styles } from "../styles/react";

export default function Reactjs() {
    return (
        <>
            <Head>
                <title>ReactJS Proyectos</title>
                <link
                    rel="shortcut icon"
                    href="/images/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <section className="project">
                <Card
                    proyect="firebase-app-search-device"
                    technologies="ReactJS, Redux, Login, Firebase, Webpack, Babel"
                    image="/images/tech2.png"
                    alt="Búsqueda de dispositivos electronicos"
                    url="https://github.com/firebase-app-search-device"
                    color="primary"
                />
                <Card
                    proyect="Learn React Native"
                    technologies="Java, React, React-Navigation, Android, IOS"
                    image="/images/tech3-1.png"
                    alt="Aprendiendo React Native"
                    url="https://github.com/learn-react-native"
                />
                <Card
                    proyect="Qonexia CRA"
                    technologies="CRA, React, GraphQL, Redux"
                    image="/images/tech4-1.png"
                    alt="Qonexia con Create React App"
                    url="https://github.com/qonexia-CRA"
                />
                <Card
                    proyect="qonexia-server-side-render"
                    technologies="server-side-render, React, GraphQL, Redux, Next"
                    image="/images/tech2.png"
                    alt="Qonexia con NextJS y Vercel"
                    url="https://github.com/qonexia-server-side-render"
                />
                <Card
                    proyect="qonexia"
                    technologies="React, GraphQL, Redux, Webpack"
                    image="/images/tech3-1.png"
                    alt="React con Webpack y Babel"
                    url="https://github.com/qonexia"
                />
                <Card
                    proyect="url-shortening-api-master"
                    technologies="React, Webpack, url-shortening, PWA"
                    image="/images/tech4-1.png"
                    alt="React con Webpack y Babel"
                    url="https://github.com/url-shortening-api-master"
                />
                <Card
                    proyect="app-react"
                    technologies="React, Webpack, PWA"
                    image="/images/tech2.png"
                    alt="React con CRA"
                    url="https://github.com/app-react/"
                />
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
