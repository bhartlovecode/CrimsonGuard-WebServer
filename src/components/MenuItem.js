import React from 'react'

const MenuItem = ( {itemName} ) => {
  return (
    <div className='p-4 border-t-2 border-solid border-gray-500'>
        {itemName}
    </div>
  )
}

export default MenuItem