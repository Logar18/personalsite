import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div className='invisible w-0 md:visible md:w-1/5 flex-col justify-center h-screen lg:border-r lg:border-black items-center sticky top-5'>
            <Link to="/">
                <h1 className='text-5xl font-medium mb-5'>Logan's Portfolio</h1>
            </Link>
            <h1 className='text-3xl mb-1'>Projects</h1>
            <ul className='list-none flex-col items-center justify-center'>
                <Link to="/compiler">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Compiler
                    </li>
                </Link>
                <Link to="/votesafe">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        VoteSafe
                    </li>
                </Link>
            </ul>
            <h1 className='text-3xl mt-5'>Coursework</h1>
            <ul className='list-none flex-col items-center justify-center'>
                <Link to="/languagetheory">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Language Theory
                    </li>
                </Link>
                <Link to="/linux">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Linux
                    </li>
                </Link>
                <Link to="/algorithms">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Algorithms
                    </li>
                </Link>
                <Link to="/database">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Database Management
                    </li>
                </Link>
                <Link to="/formallang">
                    <li className='hover:cursor-pointer hover:font-medium font-light ml-1'>
                        Formal Languages
                    </li>
                </Link>
            </ul>

    </div>
  )
}

export default SideMenu