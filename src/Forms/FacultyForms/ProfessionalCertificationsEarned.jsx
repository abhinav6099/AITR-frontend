import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm,FormProvider } from 'react-hook-form'
import DataTable from 'react-data-table-component'
import SelectBox from '../../components/SelectBox'
import DynamicUserFields from '../../components/DynamicFieldsForm'
import { useState, useEffect } from 'react'
import axios from 'axios'



function ProfessionalCertificationsEarned() {

  const { register, handleSubmit } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/faculty/professional-certificates")
      console.log(data.data.certificates)
      setData(data.data.certificates)

    }

  }
      const methods = useForm({
          defaultValues: {
            studentName: "",
            enrollmentNumber: "",
            branch: "",
            batch: "",
            doiOrIsbn: "",
            titleOfPaper: "",
            publicationDate: "",
            journalOrConferenceName: "",
            indexing: "",
            paperPdf: null,
            coAuthors: [{ memberName: "", role: "" }],
            facultyGuide: [{ memberName: "", role: "" }],
          },
        });

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  }, [loading])

  const onSubmit = async (data) => {
    const formData = new FormData();
    const fileInput = document.querySelector("input[type='file']");
    if (fileInput?.files[0]) {
      formData.append("file", fileInput.files[0]);
    }
    try {
      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

      const url = "http://localhost:3000/api/v1/faculty/professional-certificate"  //professional-certificate
      const response = await axios.post(url
        , {
          facultyName: data.facultyName,
          certificationName: data.certificationName,
          issuingBody: data.issuingBody,
          certificationLevel: data.certificationLevel,
          validityPeriod: data.validityPeriod,
          domain: data.domain,
          // using fileId without middleware 
          // TODO : create middleware and send the fileId with using middleware
          fileId: res.data.fileId
        }

      )
      console.log(response)


    } catch (err) {
      console.log("Error:", err)
    }
    console.log(data)

    setLoading((p) => !p)
  }


  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Professional Certificate Earned
      </h2>
      <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
          <InputBox label="faculty_Name" name="facultyName" register={register} required />
          <InputBox label="certification_Name" name="certificationName" register={register} required />
          <InputBox label="issuing_Body" name="issuingBody" register={register} required />
          <SelectBox label="certification_Level" options={['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Other']} name="certificationLevel" register={register} required />
          <InputBox label="validity_Period" name="validityPeriod" register={register} required />
           <DynamicUserFields
                label="Field/Domain"
                name="Field/Domain"
                fieldName="Field/Domain"
                addButtonLabel="Add Field/Domain"
              />
          <FileBox label="certificate_Upload" name="certificateUrl" register={register} />

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
        <DataTable columns={certificationColumns} data={data} />
      </form>
      </FormProvider>
    </div>
  )
}

export default ProfessionalCertificationsEarned


export const certificationColumns = [
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Certification Name',
    selector: row => row.certificationName,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Issuing Body',
    selector: row => row.issuingBody,
    sortable: true,
  },
  {
    name: 'Level',
    selector: row => row.certificationLevel,
    sortable: true,
  },
  {
    name: 'Validity Period',
    selector: row => row.validityPeriod,
    sortable: true,
  },
  {
    name: 'Field/Domain',
    selector: row => row.domain,
    sortable: true,
  },
  {
    name: 'Certificate',
    cell: row => (
      row.fileId ? (
        <a
          href={`http://localhost:3000/file/${row.fileId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View PDF
        </a>
      ) : "N/A"
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex flex-col items-center justify-center gap-0.5">
        {/* <button onClick={() => alert(`Viewing certificate ${row.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 rounded">View</button> */}
        <button onClick={() => alert(`Editing certificate ${row._Id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-5 py-1 rounded">Edit</button>
        <button
          onClick={
            async () => {
              console.log(row._id)
              alert(`Deleting this ${row._id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/faculty/professional-certificate"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
