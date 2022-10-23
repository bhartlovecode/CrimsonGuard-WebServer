import React from 'react'
import { useState } from 'react'

const UploadButton = () => {

    const [fName, setfName] = useState("")
    const fileUpload = document.getElementById("fileButton")

    const handleChange = (e) => {
        console.log(fileUpload.files[0])
        setfName(fileUpload.files[0].name)
    };

  return (
    <div className="w-full grid inset-x-0">
        <label className="bg-slate-800 hover:bg-red-700 text-white w-1/5 
            m-4 py-2 px-4 rounded-full hover:bg-red text-center mx-auto hover:cursor-pointer">
            <input type="file" required accept=".txt" id="fileButton"
            onChange={(e) => handleChange(e)}/>
            Upload File
        </label>
        <h2 className="mx-auto font-OpenSans" id="fileName">
            {fName}
        </h2>
    </div>
  )
}

export default UploadButton