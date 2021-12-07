import { useFlag } from '@unleash/proxy-client-react'

const Page = () => {
  const ssrDemoFlag = useFlag('ssr-demo')

  console.log('ssrDemoFlag value:', ssrDemoFlag)

  return <div>ssr-demo flag status: {ssrDemoFlag ? 'on' : 'off'}</div>
}

export default Page
