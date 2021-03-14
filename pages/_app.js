import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from 'redux-config/store'

// Component
import Header from "components/header";
import Footer from "components/footer";

function MyApp({Component, pageProps}) {

    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="google-site-verification" content="DoX9ksUU8nNRym8pev2b3JZ-BiHRVeyg2Omr8vJ0veM" />
            </Head>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    );
}

export default MyApp;
