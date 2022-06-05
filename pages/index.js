import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Subdomain Takeover by F3ap" />
        <p className="description">
          https://hackerone.com/octaviam
        </p>
      </main>

      <Footer />
    </div>
  )
}
