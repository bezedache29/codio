import React from 'react'
import Template from '../../components/Template/Template'

export default function show({ results }) {
  return (
    <Template headTitle='User' headDescription="Détail d'un utilisateur">
      <div className="card w-50 mx-auto">
        <div className="card-body">
          <h5 className="card-title">{results.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Username : {results.username}</h6>
          <ul className="list-group">
            <li className="list-group-item">Username : {results.username}</li>
            <li className="list-group-item">Email : {results.email}</li>
            <li className="list-group-item">Site Web : {results.website}</li>
            <li className="list-group-item">Téléphone : {results.phone}</li>
        </ul>
        </div>
      </div>
    </Template>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const results = await data.json()

  return {
    props: {
      results
    }
  }
}


export async function getStaticPaths() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const results = await data.json()

  const paths = results.map(item => ({
    params: {id: item.id.toString()}
  }))

  return {
    paths,
    fallback: false
  }
}
