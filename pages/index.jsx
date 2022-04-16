import Head from 'next/head'
import CardCode from '../components/CardCode/CardCode'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Code.io</title>
        <meta name="description" content="Blog communautaire de développement web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='mt-4'>Bienvenue sur Code.io</h1>
        <p className='mb-5'>Blog communautaire de développement web</p>

        <section className='row justify-content-center mt-5'>
          <CardCode 
            title='Lisez les articles'
            subtitle='Maximisez votre culture web'
            description='Chaque auteur tente de vous apporter le plus de valeur possible par article.'
            link='blog'
            nameLink='Visitez le blog'
          />

          <CardCode 
            title='Faites un tour vers la liste de membres'
            subtitle='Faites vous des amis'
            description='Ajouter, invitez et discutez avec les différents membres.'
            link='users'
            nameLink='Découvrez la liste de membres'
          />
        </section>

        
      </main>
    </div>
  )
}
