import React from 'react'
import { Link } from 'react-static'
import { FiArrowLeft } from "react-icons/fi";
//

export default () => (
    <div>
        <nav className='flex flex-row items-center place-content-between py-8 px-12'>
            <Link to="/" className="text-4xl font-light border-2 border-white rounded-full flex flex-row items-center px-8 py-4">
                <FiArrowLeft/><span className='ml-2'>BACK</span>
            </Link>    
            <h1 className='text-9xl font-bold mr-4'>PROJECTS</h1>
        </nav>
        <ul>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`softonic-projects/chrome-plugin/`} 
                    className='text-10xl font-bold'>
                        Chrome Plugin
                </Link>
                <div className='ml-8 rotate-270'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Product Design</p>
                    <p className='text-lg font-medium leading-tight'>October 2018</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold stroke-title text-neutral-900'>
                        Softonic's Design System
                </Link>
                <div className='ml-8 rotate-270'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>August 2017</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold'>
                        Download Intent
                </Link>
                <div className='ml-8 rotate-270'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>September 2019</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold stroke-title text-neutral-900'>
                        Catalog CMS
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>January 2020</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold'>
                        Softonic Articles Redesign
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>September 2017</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold stroke-title text-neutral-900'>
                        Tokoro
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Personal Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>January 2020</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold'>
                        Web Stories
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Product Design</p>
                    <p className='text-lg font-medium leading-tight'>March 2021</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold stroke-title text-neutral-900'>
                        Flapimas
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Personal Project</p>
                    <p className='text-lg font-medium leading-tight'>Design & Development</p>
                    <p className='text-lg font-medium leading-tight'>October 2018</p>
                </div>
            </li>
            <li className='flex flex-row items-center px-12 py-1 border-t border-white'>
                <Link to={`/under-construction/`} 
                    className='text-10xl font-bold'>
                        SoloJuegos
                </Link>
                <div className='ml-8'>
                    <p className='text-lg font-medium leading-tight'>Softonic Project</p>
                    <p className='text-lg font-medium leading-tight'>Product Design</p>
                    <p className='text-lg font-medium leading-tight'>September 2019</p>
                </div>
            </li>
        </ul>
    </div>
)
