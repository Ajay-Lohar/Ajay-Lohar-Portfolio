import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full mt-5 flex  justify-center'>
      <div className='w-250  flex'>
        <div className='w-full '>
          <div >
            <h1 className='w-40 border-1 border-black rounded-3xl p-2 mb-5 font-medium hover:bg-[purple]   hover:scale-110  hover:text-white duration-300'>
              <i class="fa-regular fa-user fa-xl mx-3">
                </i>
             Contact  
            </h1>
            <div>
              <h1 className='text-4xl font-bold mb-5'><span className='text-[purple]' >Contact</span> Me </h1>
              <hr className='w-30 border-[8px] border-[#a578a5]  hover:border-[purple] duration-300' />

            </div>

            


         </div>
         <div className='flex justify-center items-center'>
         <div className='w-100 border rounded-xl font-medium'>
          
              <form className='w-full p-5 flex flex-col items-center justify-center'>
                <p className='bold text-2xl pb-4'>Send Me a Email</p>
                <input className='w-full border border-black rounded-lg p-2 mb-5' type='text' placeholder='Your Name' />
                <input className='w-full border border-black rounded-lg p-2 mb-5' type='text' placeholder='Your Email' />
                <textarea className='w-full border border-black rounded-lg p-2 mb-5' placeholder='Your Message' />
                <button className='w-80 p-4   border-[1px] text-black rounded-4xl hover:scale-110  hover:bg-[purple] hover:text-white duration-300'>Submit</button>
              </form>
            </div>
            
        </div>

        </div>
        
       
      </div>
    </div>
</>
  )
}

export default Contact