import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Code.io</title>
        <meta name="description" content="Blog communautaire de développement web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bienvenue sur Code.io</h1>
        <p>Blog communautaire de développement web</p>
      </main>
    </div>
  )
}
