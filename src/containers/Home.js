import React from 'react'
//
import { Head } from 'react-static'
import logoImg from '../logo.png'

export default () => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Adrià Compte | Product Designer and Creative Developer</title>
      <meta name="description" content="Adrià Compte's Personal Website" />
    </Head>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <p>test</p>
    <img src={logoImg} alt="" />
  </div>
)
