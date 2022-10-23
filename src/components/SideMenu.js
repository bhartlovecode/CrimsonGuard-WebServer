import React from 'react'
import MenuItem from './MenuItem'

const SideMenu = () => {
  return (
    <div className='SideMenu bg-gray-400 font-OpenSans inset-x-0 top-0'>
        <MenuItem itemName="File Uploader"></MenuItem>
        <MenuItem itemName="History"></MenuItem>
        <MenuItem itemName="How Guard Works"></MenuItem>
        <MenuItem itemName="Configuration"></MenuItem>
        <div className='bottom-0 absolute mb-4 ml-6'>
            <button className='bg-slate-800 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded-full hover:bg-red'>Logout</button>
        </div>
    </div>
  )
}

export default SideMenu