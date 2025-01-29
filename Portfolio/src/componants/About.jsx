import React from 'react'
const About = () => {
  return (
    <> 
    <div className='w-full mt-5 flex  justify-center'>
      <div className='w-250  flex'>
        <div className='w-6/10'>
          <div >
            <h1 className='w-40 border-1 font-medium hover:bg-[purple]   hover:scale-110  hover:text-white duration-300 border-black rounded-3xl p-2 mb-5'>
              <i class="fa-regular fa-user fa-xl mx-3">
                </i>
             About Me
            </h1>
            <div>
              <h1 className='text-4xl font-bold mb-5'>Full-Stack <span className=' text-[purple]'>Developer</span> <br /> Based in India</h1>
              <hr className='w-30 border-[8px] border-[#a578a5] my-10 hover:border-[purple] duration-300' />

            </div>
            <div>
              <h1 className='text-xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am a Full-Stack Developer from Pune, India . I put my time learning essentials from other fields as well. I am very comfortable with adapting to new software and new technologies. With a strong passion for innovation and a keen eye for detail, I'm confident in my ability to collaborate with cross-functional teams, drive projects forward, and deliver high-quality results. </h1>
            </div>
          </div>

        </div>
        <div className='w-4/10'>
        <div className='px-24'>
          <h1 className='text-2xl  my-5 font-bold'>Languages</h1>
          <hr className='w-30 border-[4px] border-[#a578a5] my-4 hover:border-[purple] duration-300' />
          <ul className='font-medium'>
            <li>English</li>
            <li>Marathi</li>
            <li>Hindi</li>
          </ul>
        </div>
        <div className='px-24'>
          <h1 className='text-2xl  my-5 font-bold'>Nationality</h1>
          <hr className='w-30 border-[4px] border-[#a578a5] my-4 hover:border-[purple] duration-300' />
          <ul className='font-medium'>
            <li>Indian</li>
            
          </ul>
        </div>
        <div className='px-24'>
          <h1 className='text-2xl  my-5 font-bold'>Hobbies</h1>
          <hr className='w-30 border-[4px] border-[#a578a5] my-4 hover:border-[purple] duration-300' />
          <ul className='font-medium'>
            <li>Movie Watching </li>
            <li>Treking</li>
          </ul>
        </div>

        </div>
       
      </div>
    </div>

    </>
  )
}

export default About