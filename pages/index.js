import { useFlag } from '@unleash/proxy-client-react'

const Page = props => {
  const ssrDemoFlag = useFlag('ssr-demo')

  console.log(
    'random number, just to ensure we are using SSR: ',
    props.randomNumber
  )
  console.log('ssrDemoFlag value:', ssrDemoFlag)

  return <div>ssr-demo flag status: {ssrDemoFlag ? 'on' : 'off'}</div>
}

export const getServerSideProps = () => {
  return {
    props: {
      randomNumber: Math.random()
    }
  }
}

export default Page
