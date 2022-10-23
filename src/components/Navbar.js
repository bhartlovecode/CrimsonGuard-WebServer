import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 grid grid-cols-3'>
        <div className="text-white font-OpenSans p-4">
            Protect Your Files</div>
        <div></div>
        <div className='text-white font-OpenSans text-right p-4 content-center'>
            <h2>Admin</h2>
        </div>
    </div>
  )
}

export default Navbar;