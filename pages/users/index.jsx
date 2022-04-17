import React from 'react'
import Template from '../../components/Template/Template'
import Link from 'next/link'

export default function index({ results }) {
  return (
    <Template headTitle='Utilisateurs' headDescription='Liste des membres' title='La liste des utilisateurs'>
      <div className="mx-auto w-50">
        <ul className="list-group">
          {results && results.map((el, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{el.username}</span>
              <Link href={`/users/${el.id}`}><a>Contacter</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </Template>
  )
}

export async function getServerSideProps() {

  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const results = await data.json()

  return {
    props: {
      results
    }
  }
}
