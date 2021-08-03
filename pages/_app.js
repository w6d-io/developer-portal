import '@duik/it/dist/styles.css'
import '../styles/globals.scss'
import { AppProps } from 'next/app';

function App({ Component, pageProps }, AppProps) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;
