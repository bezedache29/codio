import CardCode from '../components/CardCode/CardCode'
import Template from '../components/Template/Template'

export default function Home() {
  return (
    <Template 
      headTitle='Accueil' 
      headDescription='Blog communautaire de développement web' 
      title='Bienvenue sur Code.io' 
      subtitle='Blog communautaire de développement web'
    >
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
    </Template>
  )
}
