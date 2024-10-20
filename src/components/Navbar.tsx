import React from 'react'
import { RiTimerFill } from "react-icons/ri";
import DialogDemo from './AddTimeLog';

const Navbar = () => {
  return (
    <div className='flex items-end justify-between'>
      <div className='flex items-center gap-2'>
       <RiTimerFill className="text-3xl" /> 
       <h1 className='text-xl'>Time Log</h1>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Navbar
