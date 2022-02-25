import React from 'react'
import VoteSafeHeader from './VoteSafeHeader'
import ss1 from '../../images/ss1.png'
import ss2 from '../../images/ss2.png'
import ss3 from '../../images/ss3.png'
import ss4 from '../../images/ss4.png'
import ss5 from '../../images/ss5.png'

const VoteSafe = () => {
  return (
    <>
    <div className='w-full flex-col px-10'>
      <VoteSafeHeader/>
      <h2 className='text-3xl font-bold mb-2 mt-10'>Screens</h2>
      <p className='font-light'>Below you can see various screens from the app. With an intuitive multi screen login flow, users don't have to worry about long forms
        that require you to fill out lots of personal information. After a basic sign up process that involves a phone number, username, and password, all you have to do is take a photo
        of your ID or passport and Stripe's Identity API will do the rest. </p>


      <div className='flex justify-around px-2 py-3 bg-black mt-10'>
          <img src={ss4} alt="" className='h-[400px]'></img>
          <img src={ss3} alt="" className='h-[400px]'></img>
          <img src={ss5} alt="" className='h-[400px]'></img>
          <img src={ss2} alt="" className='h-[400px]'></img>
          <img src={ss1} alt="" className='h-[400px]'></img>
      </div>
      <div className=''>
        <h2 className='text-3xl font-bold mt-10 mb-2'>Tech Stack</h2>
        <p className='font-light'></p>
      </div>
    </div>
    </>
      
  )
}

export default VoteSafe