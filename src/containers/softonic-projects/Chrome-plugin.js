import React from 'react'
import { Head } from 'react-static'

//

export default () => (
  <div className="container w-full max-w-3xl mx-auto pt-20 px-4">
    <Head>
      <title>Adrià Compte | Chrome Plugin Concept @ Softonic</title>
    </Head>
      <p className="text-xl text-sky-500 pb-1"><b>Globex Team</b> - October 2018</p>
      <h1 className="text-8xl font-bold pb-4">Chrome Plugin Concept</h1>
      <p className="font-serif text-xl pb-4">One of the biggest revenue streams of Softonic is software distribution. 
      Since it's inception the company had tried to create it's own software, 
      but never managed to deliver something that was seen as an absolute success. </p>
      <p className="font-serif text-xl pb-10">During 2018 the idea of creating new types of software started spreading again. 
      We needed new channels to monetize, engage with our users and there was a rising 
      interest to test our distribution channels with different value propositions.</p>

      <h3 className="text-4xl font-bold pb-2">My Role</h3>
      <p className="font-serif text-xl pb-4">Product Designer.</p>
      <p className="font-serif text-xl pb-10">For this project I did market research, facilitated a series of brainstorms, 
      created a value proposition, assessed development difficulty, built high fidelity 
      prototypes and pitched the idea to different stakeholders.</p>

      <h3 className="text-4xl font-bold pb-2">Process and Outcomes</h3>
      <p className="font-serif text-xl leading-relaxed pb-8">Before joining the Globex squad, I had been working with the content and editorial 
      teams, to redesign the articles page, and improve user engagement. At that time I was 
      also using Muzli on a daily basis, and after some brainstorming sessions with the team, 
      observing the company’s needs that were arising,  I came up with the idea to build a 
      browser plugin that would deliver a similar experience, but with Softonic's content.</p>
      <div className="text-center pb-8">
      {/* <ZoomImage alt="Muzli original example" className="pb-2" src="https://res.cloudinary.com/muniatu/image/upload/v1640130692/chrome-plugin/muzli-original.png"/> */}
        <a className="font-normal text-white font-serif underline text-xl italic">Muzli for Google Chrome</a>
      </div>
      <p className="font-serif text-xl leading-relaxed pb-4">Muzli is a Chrome plugin that shows you the latest 
      design news from the sources you select every time you open a new tab. To me it's of great use, as everytime 
      I open a new tab I get reminded about new and interesting things, with a strong visual appeal.</p>
      <p className="font-serif text-xl leading-relaxed pb-8">I thought that if we could deliver a similar experience 
      with Softonic's content, it would be a great opportunity to engage with our users, so I created two simple 
      prototypes to showcase the idea. Both in light and dark themes:</p>
      <div className="text-center pb-8">
      {/* <ZoomImage alt="Softonic muzli light" className="rounded-md" src="https://res.cloudinary.com/muniatu/image/upload/v1640130309/chrome-plugin/softonic-muzli-light.jpg"/> */}
        
      </div>
      <div className="text-center pb-8">
      {/* <ZoomImage alt="Softonic muzli dark" className="rounded-md" src="https://res.cloudinary.com/muniatu/image/upload/v1640130309/chrome-plugin/softonic-muzli-dark.jpg" /> */}
        
      </div>
      <p className="font-serif text-xl leading-relaxed pb-4">At the moment, many members of the engineering team, 
      specially some front-end developers, were interested in learning how to create Chrome plugins, we were 
      allowed to dedicate 15% of our time into developing ideas that we liked, so it felt like the perfect chance 
      to try this type of project.</p>
      <p className="font-serif text-xl leading-relaxed pb-10">Sadly, the idea was dismissed as the installation funnel 
      of a chrome plugin is different from a regular binary (which was the preferred type of installation to test), 
      and most of the available human resources had to be put to more critical ends.</p>

      <h3 className="text-4xl font-bold pb-2">Conclusions and Learnings</h3>
      <p className="font-serif text-xl leading-relaxed pb-10">This project was really fun to do and I wish it would have, 
      at least, been tested, as the development cost was low and the potential for gathering user data and improving user 
      engagement was significant. But, in the end, all product development is tied to business needs and we couldn’t find 
      the space to bring it to fruition.</p>
      
  </div>
)
