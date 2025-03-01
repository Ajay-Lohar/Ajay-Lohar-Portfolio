import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profilepic.png'


const Home = () => {
  return (
    <>
    <div className='flex '>
        <div className='w-1/2 px-40  '> 
        
        <h1 className='text-8xl font-bold text-[purple] pb-2'>Ajay </h1><br />
        <h2 className='text-5xl font-bold pb-2'>Lohar</h2><br />
        <hr className='w-30 border-[10px] border-[#a578a5] my-2 hover:border-[purple] duration-300' />

        <p className='text-3xl  pb-2'>I am a Full-Stack <span className='font-bold'>Developer</span> </p>
        <div className='pb-2 gap-4 p-5 flex items-center'>
          <Link to={`https://x.com/lohar_ajay28271`}>
          <div className='border-[1px] text-black rounded-xl p-3   hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-x-twitter   fa-xl "></i>

          </div>
          </Link>

          <Link to={`https://www.linkedin.com/in/ajaylohar/`}>
          <div className='border-[1px] text-black rounded-xl p-3  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-linkedin-in  fa-xl"></i>
          </div>
          </Link>

          <Link to={`https://www.instagram.com/`}>
          <div className='border-[1px] text-black rounded-xl p-3  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-instagram  fa-xl   "></i>

          </div>
          </Link>

          <Link to={`https://wa.me/7798832017`}>
          <div className='border-[1px] text-black rounded-xl p-3  hover:bg-[purple] hover:text-white duration-300'>
          <i className="fa-brands fa-whatsapp  fa-xl "></i>

          </div>
          </Link>
        
        </div>
        <div  className=' pt-5'>
        <Link >
          <button className='w-60   p-3 mx-5 font-medium border-[1px] text-black rounded-4xl hover:scale-110  hover:bg-[purple] hover:text-white duration-300'> 
          <i className="fa-brands fa-readme fa-flip fa-xl px-3"></i>
           View Resume
          </button>
          </Link>
          
        </div>

        <div>
     
        </div>
        
        </div>
        <div className='w-1/2 '>
        
        <img  className=' flex justify-center items-center' src={profile} alt="" />
        </div>
    </div>
    <Link to={`https://github.com/Ajay-Lohar`}>
    <div className='w-50 p-4 mt-5 border-[1px] font-medium text-black rounded-r-4xl  hover:bg-[purple] hover:text-white  hover:scale-110 duration-300'>
    <i className="fa-brands fa-github fa-shake fa-2xl p-2 "></i>  GitHub
    </div>
    </Link>
    
    </>
  )
}

export default Home
