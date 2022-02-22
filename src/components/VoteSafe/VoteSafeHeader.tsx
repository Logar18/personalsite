import React from 'react'
import { SiTypescript, SiNodedotjs, SiReact, SiPostgresql } from 'react-icons/si'

const VoteSafeHeader = () => {
  return (
    <div className='flex-col justify-between mb-10'>
      <div className='flex'>
        <p className='text-5xl'>VoteSafe</p>
      </div>
      <div className='flex items-center mt-3'>
        <SiReact size={30}/>
        <SiTypescript size={30} className='ml-2'/>
        <SiNodedotjs size={30} className='ml-2'/>
        <SiPostgresql size={30} className='ml-2'/>
      </div>

    </div>
  )
}

export default VoteSafeHeader