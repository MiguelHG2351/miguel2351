/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bienvenido a mi sitio web personal donde encontraras temas de programación y ese tipo de cosas xd"
        />
        <title>MiguelHG2351 | Miguel Hernández Gaitan</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#09f" />
        <meta
          name="keywords"
          content="miguelhg2351, Miguel2351, Miguel Hernández Gaitan, Software developer, FrontEnd, React.js"
        />
      </Head>
      {/* <Script src="/custom-properties.js"></Script> */}
      <Script src="/scripts/registerBezel.js"></Script>
      <main className="px-[5%]">
        <section className="md:grid md:grid-cols-2">
          <section className="py-8">
            <h1 className="text-xl font-bold">
              Bienvenido a mi página web personal
            </h1>
            <div className="my-4">
              <p className="mb-4 max-w-prose text-base">
                En esta página encontraras información{" "}
                <Link className="font-bold text-indigo-600" href="/about">
                  sobre mí
                </Link>{" "}
                y que hago como software developer. De momento no hay mucho
                contenido pero ahí lo ire agregando con el tiempo, hay muchas
                temas que quiero aprender y me gustaria compartir aquí.
              </p>
              <p className="max-w-prose text-base">
                Esta página aún le falta mucho por mejorar pero con el tiempo le
                estare agregando cositas :D!
              </p>
            </div>
          </section>
          <section className="md:flex md:items-center md:justify-center">
            <div className="flex flex-col items-start gap-y-2">
              <h2 className="self-center text-lg font-bold">
                Última publicación
              </h2>
              <div className="w-full drop-shadow-md">
                <Image
                  src="/images/blog/latest.png"
                  className="inline-block w-full align-middle md:w-96"
                  width={384}
                  height={286}
                  alt="Último trabajo"
                />
                <div className="flex">
                  <button type="button" className="bg-indigo-600 py-2 px-6">
                    Entrar
                  </button>
                  <div className="relative flex-1 before:absolute before:top-1/2 before:left-0 before:right-[calc(50%_-_2px)] before:-translate-y-1/2 before:transform before:bg-red-500 before:p-[2px] before:content-['_'] after:absolute after:left-1/2 after:bottom-[calc(50%_-_2px)] after:top-0 after:bg-red-600 after:p-[2px] after:content-['_']"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Algo con el efecto de ese video estaria pro xd */}
        {/* https://www.youtube.com/watch?v=U33qB0_wFWI&ab_channel=OnlineTutorials */}
        {/* Sección: Publi */}
        {/* Proyectos: En producción */}
        {/* Detalles: Datalles que me pueden servir luego */}
        {/* bloques: bloques vacios xd */}
        {/* bloques: bloques vacios xd */}
      </main>
    </>
  )
}
