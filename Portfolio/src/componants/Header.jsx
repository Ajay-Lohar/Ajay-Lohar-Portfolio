import React from 'react'
import HomeMaxRoundedIcon from '@mui/icons-material/HomeMaxRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const Header = () => {
  return (
    <> 
    <header className='mx-auto flex justify-center items-center'>
          <ul className='  flex gap-10 text-center p-3 m-1 justify-between px-10  mt-10 border-[1px] text-black rounded-4xl'>
            <li><a href="#" className='' ><HomeMaxRoundedIcon /> </a></li>
            <li><a href="#"><Person2RoundedIcon /></a></li>
            <li><a href="#"><LightbulbRoundedIcon /></a></li>
            <li><a href="#"><CallRoundedIcon /></a></li>
          </ul>
  
    </header>
    </>
  )
}

export default Header