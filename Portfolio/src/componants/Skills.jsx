import React from 'react'

const Skills = () => {
  return (
    <> 
    <div className='w-full mt-5 flex  justify-center'>
      <div className='w-250  flex'>
        <div className='w-6/10'>
          <div >
            <h1 className='w-40 border-1 border-black rounded-3xl p-2 mb-5 font-medium hover:bg-[purple]   hover:scale-110  hover:text-white duration-300'>
              <i class="fa-regular fa-user fa-xl mx-3">
                </i>
             My Skills 
            </h1>
            <div>
              <h1 className='text-4xl font-bold mb-5'>My  <span className='text-[purple]' >Technical</span> <br />  Experience/Skills </h1>
              <hr className='w-30 border-[8px] border-[#a578a5] my-10 hover:border-[purple] duration-300' />

            </div>
            <div className='font-medium'>
              <div className='text-2xl flex gap-5 pb-5 '>
                <p >Web Dev : </p>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="16"   width="30" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="16"   width="30" />
                <img src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" height="16"   width="30"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="16"   width="30" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="16"   width="30"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="16"   width="30"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="16"   width="30" />
                
              </div>
              <div className='text-2xl flex gap-5 pb-5'>
              <p >Laguages : </p>

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="16"  width="30"  />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"height="16"  width="30"  />
              
                <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" height="16"  width="30"  />
               
                
                
              </div>
              <div className='text-2xl flex gap-5 pb-5'>
              <p >Other Skills : </p>

              
                <img src="https://vectorwiki.com/images/gPR02__hibernate.svg" height="16"  width="30"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="16" alt="spring logo"  width="30" />

                

              </div>
              <div className='text-2xl flex gap-5 pb-5'>
              <p >Database : </p>

             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="16"  width="30" />
             
                
              </div>
              <div className='text-2xl flex gap-5 pb-5'>
              <p >Tools : </p>

              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"height="16"  width="30" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" height="16"  width="30" />
              <img src="https://icon.icepanel.io/Technology/svg/Vite.js.svg" height="16"  width="30"/>
              <img src="https://icon.icepanel.io/Technology/svg/DBeaver.svg" height="16"  width="30"  />
              <img src="https://www.svgviewer.dev/static-svgs/14366/postman-icon.svg" height="16"  width="30"  />
             
                
              </div>
              
              
            </div>
          </div>

        </div>
        <div className='w-4/10 flex justify-center items-center'>
        
        <img src="https://github.com/Ajay-Lohar/Ajay-Lohar-Portfolio/blob/main/Portfolio/src/Images/title-logo.png?raw=true" alt="" />
       
        
        

        </div>
       
      </div>
    </div>

    </>
  )
}

export default Skills