import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from 'redux-config/store'
import css from 'styled-jsx/css'

// Component
import Header from "components/header";
import Footer from "components/footer";

//globaStyles
import styles from 'styles/global'

function MyApp({Component, pageProps}) {

    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="google-site-verification" content="DoX9ksUU8nNRym8pev2b3JZ-BiHRVeyg2Omr8vJ0veM" />
                <link rel="manifest" href="/manifest.webmanifest"/>
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
            </Head>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
            <style jsx global>
                { styles }
            </style>
        </>
    );
}

export default MyApp;
