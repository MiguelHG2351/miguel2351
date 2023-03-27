/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Link from "next/link"

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bienvenido a mi sitio web personal donde encontraras temas de programación y ese tipo de cosas xd"
        />
        <title>Miguel2351 | Miguel Hernández Gaitan</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="theme-color" content="#09f" />
        <meta
          name="keywords"
          content="miguelhg2351, Miguel2351, Miguel Hernández Gaitan, Software developer, FrontEnd, React.js"
        />
      </Head>
      {/* <Script src="/custom-properties.js"></Script> */}
      {/* <Script src="/scripts/registerBezel.js"></Script> */}
      <main className="px-[5%]">
        <section className="flex flex-col gap-y-4 py-8 md:flex-row">
          <section className="md:flex-1">
            <div>
              <h1 className="text-xl font-bold md:text-4xl">
                Bienvenido a mi página web personal
              </h1>
              <div className="my-4">
                <p className="mb-4 max-w-prose text-base">
                  En esta página encontraras información{" "}
                  <Link className="font-bold text-blue-600" href="/about">
                    sobre mí
                  </Link>{" "}
                  y que hago como software developer. De momento no hay mucho
                  contenido pero ahí lo ire agregando con el tiempo, hay muchas
                  temas que quiero aprender y me gustaria compartir aquí.
                </p>
                <p className="max-w-prose text-base">
                  Esta página aún le falta mucho por mejorar pero con el tiempo
                  le estare agregando cositas :D!
                </p>
              </div>
            </div>
            <Link
              href="/explorar"
              className="inline-block rounded-md bg-blue-600 py-2 px-6 md:mt-8"
            >
              Explorar
            </Link>
          </section>
          <section className="md:flex md:flex-1 md:items-center md:justify-center">
            <div className="flex flex-col items-start gap-y-2">
              <h2 className="self-center text-lg font-bold">
                Última publicación
              </h2>
              <div className="w-full drop-shadow-md">
                <img
                  src="/images/blog/latest.png"
                  className="inline-block w-full align-middle md:w-96"
                  width={384}
                  height={286}
                  alt="Último trabajo"
                />
                <div className="flex">
                  <Link
                    href="/blog/aws-amplify-1"
                    className="bg-blue-600 py-2 px-6"
                  >
                    Entrar
                  </Link>
                  <div className="relative flex-1 before:absolute before:top-1/2 before:left-0 before:right-[calc(50%_-_2px)] before:-translate-y-1/2 before:transform before:bg-red-500 before:p-[2px] before:content-['_'] after:absolute after:left-1/2 after:bottom-[calc(50%_-_2px)] after:top-0 after:bg-red-600 after:p-[2px] after:content-['_']"></div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="mt-4">
          <h2 className="text-xl font-bold">Proyecto más reciente</h2>
          <div className="mt-6">
            <div className="latest overflow-hidden rounded-lg border border-slate-400 sm:flex">
              <div className="flex-0.6">
                <img
                  src="/images/blog/miniatura/auth-system.webp"
                  alt="Mi último proyecto hecho"
                  width={960}
                  height={540}
                  className="h-auto max-w-full md:flex-[0.6]"
                />
              </div>
              <div className="w-full bg-card-gradient p-4 md:flex-[0.4] md:px-8">
                <h3 className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold">
                  Sistema de autenticación &#40;En desarrollo&#41;
                </h3>
                <p className="line-clamp-3">
                  Sistema de autenticación con passportjs y mongodb, permite
                  manejar sesiones con refresh tokens y refresh token
                </p>
                <a
                  target="_blank"
                  href="https://github.com/MiguelHG2351/auth-with-passport"
                  className="mt-4 inline-block rounded border border-blue-600 py-2 px-6 transition ease-in-out hover:bg-blue-600"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
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
