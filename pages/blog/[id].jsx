import React from 'react'
import Template from '../../components/Template/Template'

export default function show({ results }) {
  return (
    <Template>
      <div className="text-center">
        <h2>{results.title}</h2>
        <p>{results.body}</p>
      </div>
    </Template>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const results = await data.json()

  console.log(results)

  return {
    props: {
      results
    }
  }
}


export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const results = await data.json()

  const paths = results.map(item => ({
    params: {id: item.id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
}
