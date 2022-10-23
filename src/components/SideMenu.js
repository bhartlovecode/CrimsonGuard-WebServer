import React from 'react'
import MenuItem from './MenuItem'

const SideMenu = () => {
  return (
    <div className='SideMenu bg-gray-400 font-OpenSans relative'>
        <MenuItem itemName="File Uploader"></MenuItem>
        <MenuItem itemName="History"></MenuItem>
        <MenuItem itemName="How Guard Works"></MenuItem>
        <MenuItem itemName="Configuration"></MenuItem>
        <div className='w-full grid inset-x-0 bottom-0 absolute'>
            <button className='bg-slate-800 hover:bg-red-700 text-white 
            font-bold m-4 py-2 px-4 rounded-full hover:bg-red'>Logout</button>
        </div>
    </div>
  )
}

export default SideMenu