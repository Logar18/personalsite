import React from 'react'
import { SiTypescript, SiJava, SiReact, SiSpring } from 'react-icons/si'

const CompilerHeader = () => {
  return (
    <div className='flex-col justify-between mb-10'>
      <div className='flex'>
        <p className='text-5xl'>Compiler</p>
      </div>
      <div className='flex items-center mt-3'>
        <SiJava size={30}/>
        <SiSpring size={30} className='ml-2'/>
        <SiTypescript size={30} className='ml-2'/>
        <SiReact size={30} className='ml-2'/>
      </div>

    </div>
  )
}

export default CompilerHeader