import { useFlag } from '@unleash/proxy-client-react'
import { UnleashClient, InMemoryStorageProvider } from 'unleash-proxy-client'

const Page = props => {
  const ssrDemoFlag = useFlag('ssr-demo')

  console.log('Flags fetched during SSR: ', props.toggles)
  console.log('ssrDemoFlag value:', ssrDemoFlag)

  return <div>ssr-demo flag status: {ssrDemoFlag ? 'on' : 'off'}</div>
}

export async function getServerSideProps () {
  const unleash = new UnleashClient({
    fetch,
    storageProvider: new InMemoryStorageProvider(),
    url: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_URL,
    clientKey: process.env.NEXT_PUBLIC_UNLEASH_PROXY_API_KEY,
    env: process.env.NEXT_PUBLIC_UNLEASH_ENV,
    appName: 'ssr-test-app'
  })

  await unleash.start()

  const toggles = unleash.getAllToggles()

  return {
    props: {
      toggles
    }
  }
}

export default Page
