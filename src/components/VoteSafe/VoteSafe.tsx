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
      <h2 className='text-3xl font-bold mb-2'>Screens</h2>
      <div className='flex justify-around'>
          <img src={ss4} alt="" className='h-[500px]'></img>
          <img src={ss3} alt="" className='h-[500px]'></img>
          <img src={ss5} alt="" className='h-[500px]'></img>
      </div>
      <div className='flex justify-around mt-10'>
        <img src={ss2} alt="" className='h-[500px]'></img>
          <img src={ss1} alt="" className='h-[500px]'></img>
      </div>
    </div>
    </>
      
  )
}

export default VoteSafe