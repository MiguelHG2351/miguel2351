import Layout from "components/Layout/Layout";
import Header from "components/header";
import Footer from "components/footer";

import App from "next/app";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Layout>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </Layout>
            </>
        );
    }
}

export default MyApp;
