import { Provider } from 'react-redux'
import { useStore } from 'redux-config/store'

// Component
import Layout from "components/Layout/Layout";
import Header from "components/header";
import Footer from "components/footer";

function MyApp({Component, pageProps}) {

    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </Provider>
    );
}

export default MyApp;
