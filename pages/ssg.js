import Page from "../components/testing"

export default function SSG() {
  return <Page />
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        light: false,
      },
    },
  }
}
