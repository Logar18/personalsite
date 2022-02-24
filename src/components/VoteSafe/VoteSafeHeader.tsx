import React from 'react'
import { SiTypescript, SiNodedotjs, SiReact, SiPostgresql } from 'react-icons/si'

const VoteSafeHeader = () => {
  return (
    <div className='flex-col justify-between mb-10'>
      <div className='flex'>
        <p className='text-6xl font-bold'>VoteSafe</p>
      </div>
      <div className='flex items-center mt-3'>
        <SiReact size={30}/>
        <SiTypescript size={30} className='ml-2'/>
        <SiNodedotjs size={30} className='ml-2'/>
        <SiPostgresql size={30} className='ml-2'/>
      </div>
      <div className='mt-10'>
          <h2 className='text-3xl font-bold mb-2'>About</h2>
          <p className='font-light'>
            VoteSafe is a mobile app that provides a platform for citizens to securely vote over the internet. With the recent debate over the legitimacy
            of votes in the latest election, VoteSafe aims to put these worries to rest and allow users a voting experience that people can trust.
          </p>
        </div>

    </div>
  )
}

export default VoteSafeHeader