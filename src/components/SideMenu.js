import React from 'react'
import MenuItem from './MenuItem'

const SideMenu = () => {
  return (
    <div className='bg-gray-400 font-OpenSans w-1/5 h-screen'>
        <MenuItem itemName="File Uploader"></MenuItem>
        <MenuItem itemName="History"></MenuItem>
        <MenuItem itemName="How Guard Works"></MenuItem>
        <MenuItem itemName="Configuration"></MenuItem>
        <div className='bottom-0 flex justify-center'>
            <button className='bg-red-500 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded-full'>Logout</button>
        </div>
    </div>
  )
}

export default SideMenu