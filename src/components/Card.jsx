import React from 'react'
import { Link } from 'lucide-react'
import { FcDepartment } from 'react-icons/fc'

function Card({children, title}) {
  return (
    <div className='border-2 border-black rounded-lg shadow-lg w-1/5'>
        <div className="h-60  bg-[#ffffff] rounded cursor-pointer shadow-custom flex flex-col justify-center">
            <h1 className="text-center pb-3 text-2xl font-semibold uppercase">{title}</h1>
            <span className="flex items-center justify-center text-9xl">
              {children}
            </span>
        </div>
    </div>
  )
}

export default Card