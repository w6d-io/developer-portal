import "@duik/it/dist/styles.css";
import "../styles/globals.scss";
import { AppProps } from "next/app";
import Helmet from "react-helmet";

function App({ Component, pageProps }, AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <>
          <Helmet>
            <html lang="en" />
            <meta
              name="description"
              content="Wildcard developer operations - automated DevOps for your business."
            />
            <title>Blog - Wildcard Portal</title>
          </Helmet>
          <Component {...pageProps} />
        </>
      )}
    </div>
  );
}

export default App;
