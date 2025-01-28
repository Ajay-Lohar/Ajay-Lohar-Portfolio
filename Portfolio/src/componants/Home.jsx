import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
    <div className='flex '>
        <div className='w-1/2 px-40  '> 
        
        <h1 className='text-8xl font-bold text-[purple] pb-2'>Ajay </h1><br />
        <h2 className='text-5xl font-bold pb-2'>Lohar</h2><br />
        <hr className='w-30 border-[10px] border-[#a578a5] my-2 ' />

        <p className='text-3xl  pb-2'>I am a Full-Stack Developer </p>
        <div className='pb-2 gap-2 p-5 flex'>
          <div className='border-[1px] text-black rounded-xl p-2'>
          <FontAwesomeIcon icon={faCoffee} size='2x' />

          </div>
          <div className='border-[1px] text-black rounded-xl p-2'>
          <FontAwesomeIcon icon={faCoffee} size='2x' />

          </div>
          <div className='border-[1px] text-black rounded-xl p-2'>
          <FontAwesomeIcon icon={faCoffee} size='2x' />

          </div>
          <div className='border-[1px] text-black rounded-xl p-2'>
          <FontAwesomeIcon icon={faCoffee} size='2x' />

          </div>
        
        </div>
        <div  className=' pt-5'>
          <button className='w-65  px-5 py-2 mx-5  border-[1px] text-black rounded-4xl justify-center bg-amber-100'> 
          <FontAwesomeIcon icon={faCoffee} size='2x' />
           View Resume
          </button>
          
        </div>

        <div>
     
        </div>
        
        </div>
        <div className='w-1/2 '>
        <img  className='animate-ping h-80 flex justify-center align-center' src="src/Images/title-logo.png" alt="" />
        </div>
    </div>
    {/* github */}
    <div className='w-50 p-4 mt-5 border-[1px] text-black rounded-r-4xl '>
    <FontAwesomeIcon icon={faCoffee} size='2x' />  GitHub
    </div>
    
    
    </>
  )
}

export default Home
