import React, { useState } from 'react';
import Button from './Button';

const Accordion = ({children , label}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  return (
    <div className='w-28 border rounded-xl mb-4 shadow-md'>
        <button 
        className="w-28 flex justify-between items-center px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 rounded-t-xl"
        onClick={() => setIsOpen((p) => !p)}>{label}</button>
    <div>
        {isOpen && 
        <div className='px-4 py-3 text-gray-700 bg-white rounded-b-xl border-t'>
            {children}
        </div>
        }
    </div>
    </div>
  )
}

export default Accordion
