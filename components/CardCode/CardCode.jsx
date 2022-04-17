import Link from 'next/link'
import React from 'react'

export default function CardCode({ title, subtitle = false, description, link, nameLink = link, width = 'w-50' }) {
  return (
    <div className={`p-2 ${width}`}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* S'il y a un subtitle on l'affiche */}
          {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
          <p className="card-text">{description}</p>
          <Link href={`/${link}`}><a className="card-link">{nameLink}</a></Link>
        </div>
      </div>
    </div>
  )
}
