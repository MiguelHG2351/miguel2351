import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from 'redux-config/store'

// Component
import Layout from "components/Layout/Layout";
import Header from "components/header";
import Footer from "components/footer";

function MyApp({Component, pageProps}) {

    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Provider store={store}>
                <Layout>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </Layout>
            </Provider>
        </>
    );
}

export default MyApp;
