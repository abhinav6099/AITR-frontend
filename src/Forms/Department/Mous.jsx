import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';
import FileBox from '../../components/FileBox';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function Mous() {

  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [submit, setSubmit ] = useState(false)

  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/department/mous")
      console.log(data.data)
      setData(data.data.mous)
    }
 
  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  },[loading])

  const onSubmit = async (data) => {
 
    try{
      const formData = new FormData();
      formData.append("file" , file);

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

      console.log(data)
      const url = "http://localhost:3000/api/v1/department/mou"
      const response = await axios.post( url 
        , {
        dapetmentName: data.dapetmentName,
        agencyName: data.agencyName,
        date: data.date,
        duration: data.duration,
        description: data.description,
        funding: data.funding,
        titleOfMoU: data.titleOfMoU,
        organizationName: data.organizationName,
        dateOfSigning: data.dateOfSigning,
        validityPeriod: data.validityPeriod,
        purposeObjectives: data.purposeObjectives,
        fundSupportReceived: data.fundSupportReceived,
        // using fileId without middleware 
        // TODO : create middleware and send the fileId with using middleware
        fileId : res.data.fileId
      }
    )

      console.log(response)
      
      
      }catch(err){
        console.log("Error:", err )
      }
      console.log(data)

    setLoading((p) => !p)
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty MoU Submission Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="department Name" name="departmentName" register={register} required />
          <InputBox label="agency Name" name="agencyName" register={register} required />
          <CalenderBox label="date" name="date" register={register} required type="date" />
          <InputBox label="duration" name="duration" register={register} required />
          <InputBox label="description" name="description" register={register} required />
          <InputBox label="funding" name="funding" register={register} required />
          <FileBox label="mou Pdf" name="mouPdf" register={register} />
          <InputBox label="title Of Mou" name="titleOfMou" register={register} required />
          <InputBox label="organization Name" name="organizationName" register={register} required />
          <CalenderBox label="date Of Signing" name="dateOfSigning" register={register} required type="date" />
          <InputBox label="validity Period" name="validityPeriod" register={register} required />
          <InputBox label="purpose Objectives" name="purposeObjectives" register={register} required />
          <InputBox label="fund Support Received" name="fundSupportReceived" register={register} required />

          <button
            type="submit"
            className="col-span-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
      <DataTable columns={mouColumns} data={data} />
    </div>
  );
}

export default Mous;

export const mouColumns = [
  {
    name: "Department Name",
    selector: row => row.departmentName,
    sortable: true,
  },
  {
    name: "Agency Name",
    selector: row => row.agencyName,
    sortable: true,
  },
  {
    name: "Date",
    selector: row => new Date(row.date).toLocaleDateString(),
    sortable: true,
  },
  {
    name: "Duration",
    selector: row => row.duration,
  },
  {
    name: "Description",
    selector: row => row.description,
    wrap: true,
  },
  {
    name: "Funding",
    selector: row => row.funding || "N/A",
  },
  {
    name: "MoU PDF",
    cell: row =>
      row.mouPdfUrl ? (
        <a
          href={row.mouPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View PDF
        </a>
      ) : (
        "Not Uploaded"
      ),
    button: true,
  },
  {
    name: "Title of MoU",
    selector: row => row.titleOfMoU,
  },
  {
    name: "Industry/Organization Name",
    selector: row => row.organizationName,
  },
  {
    name: "Date of Signing",
    selector: row => new Date(row.dateOfSigning).toLocaleDateString(),
  },
  {
    name: "Validity Period",
    selector: row => row.validityPeriod,
  },
  {
    name: "Purpose/Objectives",
    selector: row => row.purposeObjectives,
    wrap: true,
  },
  {
    name: "Fund/Support Received",
    selector: row => row.fundSupportReceived || "N/A",
  },
];
