import React from 'react'
import Head from 'next/head'

export default function Template({ headTitle, headDescription, title, subtitle, children }) {
  return (
    <div className="container">
      <Head>
        <title>Code.io - {headTitle}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={headDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-center mt-4'>{title}</h1>
        <p className='text-center'>{subtitle}</p>

        {children}
      </main>
    </div>
  )
}
