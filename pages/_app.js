import FlagProvider from '@unleash/proxy-client-react'

console.log(
  process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_URL,
  '<---process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_URL'
)

const config = {
  url: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_URL,
  clientKey: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_KEY,
  refreshInterval: 15,
  appName: 'ssr-test-app',
  environment: process.env.NEXT_PUBLIC_UNLEASH_ENV
}

const App = ({ Component, pageProps, children }) => {
  return (
    <FlagProvider config={config}>
      <Component {...pageProps}>{children}</Component>
    </FlagProvider>
  )
}

export default App
