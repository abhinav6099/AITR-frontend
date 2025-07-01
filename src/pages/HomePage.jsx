import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { FcDepartment } from 'react-icons/fc'
import { FcBusiness } from 'react-icons/fc'
import { PiStudentDuotone } from 'react-icons/pi'
import { BiSolidInstitution } from 'react-icons/bi'

function HomePage() {
  return (
    <div className='homepage'>
        <div className='flex gap-4 justify-center h-screen items-center'>
            <Card children={<FcDepartment />} title={"Department"} />
            <Card children={<FcBusiness />} title={"Faculty"}/>
            <Card children={<PiStudentDuotone />} title={"Student"} />
            <Card children={<BiSolidInstitution />} title={"Institute"} />
        </div>
    </div>
  )
}

export default HomePage

