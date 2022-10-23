import React from 'react'

const UploadButton = () => {
  return (
    <div className="w-full grid inset-x-0">
        <label className="bg-slate-800 hover:bg-red-700 text-white w-1/5 
            m-4 py-2 px-4 rounded-full hover:bg-red text-center mx-auto">
            <input type="file"/>
            Upload File
        </label>
    </div>
  )
}

export default UploadButton