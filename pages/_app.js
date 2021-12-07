import FlagProvider from '@unleash/proxy-client-react'

const config = {
  url: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_URL,
  clientKey: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_KEY,
  environment: process.env.NEXT_PUBLIC_UNLEASH_ENV,
  appName: 'ssr-test-app',
  refreshInterval: 15
}

const App = ({ Component, pageProps, children }) => {
  return (
    <FlagProvider config={{ ...config, bootstrap: pageProps.toggles }}>
      <Component {...pageProps}>{children}</Component>
    </FlagProvider>
  )
}

export default App
