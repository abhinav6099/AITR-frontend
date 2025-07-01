import React from 'react'
import StudentCertificateForm from '../Forms/StudentForms/Certificate'
import StudentCertificatesTable from '../table/CertificateTable'

function AddStudentCertificateData() {
  return (
    <div>
        <StudentCertificateForm />
        <StudentCertificatesTable />
    </div>
  )
}

export default AddStudentCertificateData