import React from 'react'
import VoteSafeHeader from './VoteSafeHeader'

const VoteSafe = () => {
  return (
    <div className='w-full flex-col px-10'>
      <VoteSafeHeader/>
      <div className='flex'>
          <p className='font-light'>
            VoteSafe is a mobile app that provides a platform for Citizens to securely vote over the internet. With the recent debate over the legitimacy
            of votes in the latest election, VoteSafe aims to put these worries to rest and allow users a voting experience that people can trust.
          </p>
      </div>
    </div>  
  )
}

export default VoteSafe