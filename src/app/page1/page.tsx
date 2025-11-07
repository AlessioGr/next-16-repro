import { subscribeToHMR } from './subscribeToHMR'
import { Component } from '../../Component'

const RootPage = async ({ Component }: any) => {
  await subscribeToHMR()

  return (
    <html>
      <body>
        <iframe src="http://localhost:3000/page2" />
      </body>
    </html>
  )
}

const Page = () => {
  return <RootPage Component={Component} />
}

export default Page
