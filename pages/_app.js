import '../styles/globals.scss'
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import MDXComponents from '/pages/components/MDXComponents';

function App({ Component, pageProps }, AppProps) {
  return (
    <div suppressHydrationWarning>
      <MDXProvider components={MDXComponents}>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </MDXProvider>
    </div>
  );
}

export default App;
