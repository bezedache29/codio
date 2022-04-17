import React from 'react'
import CardCode from '../../components/CardCode/CardCode'
import Template from '../../components/Template/Template'

export default function index({ results }) {
  return (
    <Template headTitle='Blog' headDescription='Blog communautaire' title='Bienvenue sur le Blog.' subtitle='Voici les articles'>
      <section className='row justify-content-center mt-5'>
        {results && results.map((el, index) => (
          <CardCode 
            title={el.title}
            description={el.body}
            link={`blog/${el.id}`}
            nameLink='Lire cet article'
            key={index}
            width='w-25'
          />
        ))}
      </section>
    </Template>
  )
}



export async function getServerSideProps() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const results = await data.json()

  return {
    props: {
      results
    }
  }
}
