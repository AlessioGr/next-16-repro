import { subscribeToHMR } from '../page1/subscribeToHMR'

export default async function Page() {
  await subscribeToHMR()

  return (
    <html>
      <body>
        <p>page2d</p>
      </body>
    </html>
  )
}
