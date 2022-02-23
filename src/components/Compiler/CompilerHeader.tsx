import React from 'react'
import { SiTypescript, SiJava, SiReact, SiSpring } from 'react-icons/si'

const CompilerHeader = () => {
  return (
    <div className='flex-col justify-between mb-10'>
      <div className='flex'>
        <p className='text-6xl font-bold'>Compiler</p>
      </div>
      <div className='flex items-center mt-3'>
        <SiJava size={30}/>
        <SiSpring size={30} className='ml-2'/>
        <SiTypescript size={30} className='ml-2'/>
        <SiReact size={30} className='ml-2'/>
      </div>
      <div className='mt-10'>
        <div className=''>
          <h2 className='text-3xl font-bold mb-2'>About</h2>
          <p className='font-bold hover:cursor-pointer text-sky-600 mb-2' onClick={() => window.open("https://www.labouseur.com/courses/compilers/grammar.pdf")}>View Language Grammar</p>
          <p className='font-light'>
            This compiler takes language from the above grammar as source code and compiles it into executable machine code for a 6502 processor. On this page, you can explore
            some of the features of the compiler and gain insight into what processes are happening behind the scene. 
          </p>
        </div>
        <div className='mt-5'>
          
        </div>
      </div>
    </div>
  )
}

export default CompilerHeader