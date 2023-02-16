import Head from "next/head";
import { Provider } from "react-redux";
import { useStore } from "redux-config/store";
import Script from "next/script";

// Component
import Header from "components/header";
import Footer from "components/footer";

//globaStyles
import styles from "styles/global";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "lib/ga";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                    });
                    `,
        }}
      />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="DoX9ksUU8nNRym8pev2b3JZ-BiHRVeyg2Omr8vJ0veM"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
      <style jsx global>
        {styles}
      </style>
    </>
  );
}

export default MyApp;
