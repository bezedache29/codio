import Link from 'next/link'
import React from 'react'

export default function CardCode({ title, subtitle, description, link, nameLink = link }) {
  return (
    <div className="px-2 w-50">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className="card-text">{description}</p>
          <Link href={`/${link}`}><a className="card-link">{nameLink}</a></Link>
        </div>
      </div>
    </div>
  )
}
