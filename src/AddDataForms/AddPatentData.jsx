import React from 'react'
import FacultyPatentForm from '../Forms/FacultyForms/Patent'
import PatentTable from '../table/PatentsTable'

function AddPatentData() {
  return (
    <div>
        <FacultyPatentForm />
        <PatentTable />
    </div>
  )
}

export default AddPatentData