import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar bg-slate-800 grid grid-cols-3 inset-x-0 top-0'>
        <div className="table ml-4">
          <h2 className="w-full h-full
          text-white font-OpenSans text-left font-bold table-cell align-middle">
            Protect Your Files
          </h2>
        </div>
        <div></div>
        <div className="table mr-4">
          <h2 className="w-full h-full
          text-white font-OpenSans text-right table-cell align-middle">
            Admin
          </h2>
        </div>
    </div>
  )
}

export default Navbar;