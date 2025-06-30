import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import FacultyForm from '../Forms/FacultyForms/FacultyForm';

function Admin() {

    const [visible , setVisible ] = useState(false);

    const onClickHandler = (e) => {
        console.log(e.target.value)
    }
    
  return (
    <div>
        <div className='navigation bar'>
            <Button onClick={(e) => onClickHandler(e)} label={"Faculty"} />
            <Button label={"student"} />
            <Button label={"Awards"} />
        </div>
        <div>
            { visible && <FacultyForm />}
        </div>
    </div>
  )
}

export default Admin