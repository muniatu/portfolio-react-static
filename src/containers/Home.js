import React from 'react'
//
import { Head, Link } from 'react-static'
import logoImg from '../logo.png'
import { FiDribbble, FiInstagram } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default () => (
  <div className="h-screen flex flex-col justify-center">
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Adrià Compte | Product Designer and Creative Developer</title>
      <meta name="description" content="Adrià Compte's Personal Website" />
    </Head>
    <h1 className="ml-12 -mt-16 mb-12 text-9xl font-bold">
      Hola! I'm Adrià Compte,<br /> 
      <span className="stroke-title text-neutral-900">a Product Designer</span><br />
      & Creative Developer
    </h1>
    <nav className="border-t border-white flex flex-row place-content-between pt-4 px-12">
      <div className="flex flex-row">
        <a href="https://dribbble.com/adriacompte">
          <FiDribbble className='text-4xl stroke-1 mr-4' />
        </a>
        <a href="https://github.com/muniatu">
          <FaGithub className='text-4xl stroke-1 mr-4' />
        </a>
        <a href="https://www.linkedin.com/in/adria-compte-product-designer/">
          <FaLinkedinIn className='text-4xl stroke-1 mr-4' />
        </a>
        <a href="https://www.instagram.com/insert_cliche/">
          <FiInstagram className='text-4xl stroke-1' />
        </a>
      </div>
      <div>
        <Link to="/projects" className="text-4xl mr-8 font-bold">PROJECTS</Link>
        <Link to="/projects" className="text-neutral-900 stroke-menu mr-8 text-4xl font-bold">ABOUT</Link>
        <Link to="/projects" className="text-4xl font-bold">CONTACT</Link>
      </div>
    </nav>
  </div>
)
