import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';
import FileBox from '../../components/FileBox';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const RDInitiatives = () => {

  
  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [submit, setSubmit ] = useState(false)

  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/department/rnds")
      console.log(data.data)
      setData(data.data.rdInitiatives)
    }
 
  }
  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  },[loading])

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file" , file);
    try{
      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)
      console.log(data)
      if(res.data.status == 200 && res?.data.fileId){

        const url = "http://localhost:3000/api/v1/department/rnd"
        const response = await axios.post( url 
          , {
            dapetmentName: data.dapetmentName,
            agencyName: data.agencyName,
            date: data.date,
            duration: data.duration,
            description: data.description,
            funding: data.funding,
            projectTitle: data.titleOfMoU,
            fundingAgency: data.fundingAgency,
            principalInvestigator: data.principalInvestigator,
            coInvestigator: data.coInvestigator,
            budget: data.budget,
            output: data.output,
            // using fileId without middleware 
            // TODO : create middleware and send the fileId with using middleware
            fileId : res.data.fileId
          }
        )
        console.log(response.d)
      }else {
        console.error("File upload failed, skipping award creation.");
      }
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
      console.log(data)

    setLoading((p) => !p)
  } ;
  
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        R&D Initiatives Submission Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="department Name" name="departmentName" register={register} required />
          <InputBox label="agency Name" name="agencyName" register={register} required />
          <CalenderBox label="date" name="date" register={register} required type="date" />
          <InputBox label="duration" name="duration" register={register} required />
          <InputBox label="description" name="description" register={register} required />
          <InputBox label="funding" name="funding" register={register} required />
          <FileBox label="pdf" name="fileId" register={register} />
          <InputBox label="project Title" name="projectTitle" register={register} required />
          <InputBox label="funding Agency" name="fundingAgency" register={register} required />
          <InputBox label="principal Investigator" name="principalInvestigator" register={register} required />
          <InputBox label="co Investigator" name="coInvestigator" register={register} />
          <InputBox label="budget" name="budget" register={register} required />
          <InputBox label="output Patents Publications" name="outputPatentsPublications" register={register} />

          <button
            type="submit"
            className="col-span-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
      <DataTable columns={rdInitiativesColumns} data={data} />
    </div>
  );
};

export default RDInitiatives;

export const rdInitiativesColumns = [
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
    name: "PDF Document",
    cell: row =>
      row.pdfUrl ? (
        <a
          href={row.pdfUrl}
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
    name: "Project Title",
    selector: row => row.projectTitle,
    sortable: true,
  },
  {
    name: "Funding Agency",
    selector: row => row.fundingAgency,
  },
  {
    name: "Principal Investigator",
    selector: row => row.principalInvestigator,
  },
  {
    name: "Co-Investigator",
    selector: row => row.coInvestigator || "N/A",
  },
  {
    name: "Budget",
    selector: row => row.budget,
  },
  {
    name: "Output / Patents / Publications",
    selector: row => row.output || "N/A",
    wrap: true,
  },
];
