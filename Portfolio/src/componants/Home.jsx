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
        <hr className='w-30 border-[10px] border-[#a578a5] my-2 hover:border-[purple] duration-300' />

        <p className='text-3xl  pb-2'>I am a Full-Stack Developer </p>
        <div className='pb-2 gap-2 p-5 flex'>
          <div className='border-[1px] text-black rounded-xl p-5  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-x-twitter  fa-bounce fa-2xl "></i>

          </div>
          <div className='border-[1px] text-black rounded-xl p-5  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-linkedin-in fa-bounce fa-2xl"></i>
          </div>
          <div className='border-[1px] text-black rounded-xl p-5  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-instagram  fa-bounce fa-2xl   "></i>

          </div>
          <div className='border-[1px] text-black rounded-xl p-5  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-whatsapp fa-bounce fa-2xl "></i>

          </div>
        
        </div>
        <div  className=' pt-5'>
          <button className='w-75   p-4 mx-5  border-[1px] text-black rounded-4xl hover:scale-110  hover:bg-[purple] hover:text-white duration-300'> 
          <i className="fa-brands fa-readme fa-flip fa-2xl px-4"></i>
           View Resume
          </button>
          
        </div>

        <div>
     
        </div>
        
        </div>
        <div className='w-1/2 '>
        <img  className=' flex justify-center align-center' src="src/Images/title-logo.png" alt="" />
        </div>
    </div>
    {/* github */}
    <div className='w-50 p-4 mt-5 border-[1px] text-black rounded-r-4xl  hover:bg-[purple] hover:text-white  hover:scale-110 duration-300'>
    <i className="fa-brands fa-github fa-shake fa-2xl p-2 "></i>  GitHub
    </div>
    
    
    </>
  )
}

export default Home
