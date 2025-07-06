import React, { useState } from 'react';
import Button from './Button';

const Accordion = ({children , isOpen}) => {


  return (
    <div className='w-fill border bg-green-300 rounded-xl mb-4 shadow-md'>

    <div>
        {isOpen && 
        <div className='px-4 py-3 flex flex-wrap text-gray-700 bg-white rounded-b-xl border-t'>
          {children.map((child, index) => (
            <div key={index} className=" p-2 bg-blue-500 text-white rounded-lg shadow-md m-2">
              {child}
            </div>
          ))}
        </div>
        }
    </div>
    </div>
  )
}

export default Accordion
