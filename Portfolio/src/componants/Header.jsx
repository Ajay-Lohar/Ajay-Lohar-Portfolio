import React from 'react'
import HomeMaxRoundedIcon from '@mui/icons-material/HomeMaxRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <> 
    <header className='mx-auto flex justify-center items-center'>
          <ul className='flex gap-10 text-center p-3 m-1 justify-between px-10  mt-10 border-[1px] text-black rounded-4xl hover:scale-110 duration-300'>
            <li><Link to={`/`}><HomeMaxRoundedIcon/> </Link></li>
            <li><Link to={`/About`}><Person2RoundedIcon /></Link></li>
            <li><Link to={`/Skills`}><LightbulbRoundedIcon /></Link></li>
            <li><Link to={`/Contact`}><CallRoundedIcon /></Link></li>
          </ul>
  
    </header>
    </>
  )
}

export default Header