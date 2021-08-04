import '@duik/it/dist/styles.css'
import '../styles/globals.scss'
import { AppProps } from 'next/app'
import Helmet from 'react-helmet'

function App({ Component, pageProps }, AppProps) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : (
                <>
                    <Helmet>
                        <html lang="en" />
                        <meta
                            name="description"
                            content="The best no-code continuous integration platform for your business devOps. Build your visual pipeline and integrate third party apps into your builds and deployment."
                        />
                        <title>
                            Wildcard Continuous Integration CI/CD Platform Blog
                        </title>
                    </Helmet>
                    <Component {...pageProps} />
                </>
            )}
        </div>
    )
}

export default App
