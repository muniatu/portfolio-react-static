import React from 'react'
import { Link } from 'react-static'
import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";
//

export default () => (
  <div className="h-screen w-screen flex justify-center text-center">
    <div className="w-96 text-center flex flex-col justify-center self-center">
      <div className="flex flex-col self-center">
        <FiAlertTriangle className='text-9xl stroke-1 mb-4' />
      </div>
      <h1 className="text-2xl mb-8">Sorry, this page is still under construction.</h1>
      <div className="flex flex-col self-center">
        <Link to="/" className="text-2xl font-light border-2 border-white rounded-full flex flex-row items-center px-8 py-4">
          <FiArrowLeft/><span className='ml-2'>BACK</span>
        </Link>  
      </div>
    </div>
  </div>
)
