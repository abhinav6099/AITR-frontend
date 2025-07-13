import React, { useEffect, useState } from 'react';
import StartupForm from '../Forms/StudentForms/StartupForm';
import StudentTable from '../table/StudentTable'; // Can rename to StartupTable if needed
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function AddStartups() {
  const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/startups")
      console.log(data.data)
      setData(data.data.startupsData)
    }

  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  }, [loading])

  const onSubmit = async (data) => {

    console.log(data)
    console.log(data.file[0])
    setFile(data.file[0])
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

      const url = "http://localhost:3000/api/v1/students/extracurricular"
      const response = await axios.post(url
        , {
          startupName: data.startupName,
          domain: data.domain,
          incubationSupport: data.incubationSupport,
          currentStatus: data.currentStatus,
          wesiteLink: data.wesiteLink,

          fileId: res.data.fileId,
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
    <div>
      <StartupForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <DataTable data={data} columns={startupColumns} />
    </div>
  );
}

export default AddStartups;

export const startupColumns = [
  {
    name: "Startup Name",
    selector: row => row.startupName,
    sortable: true,
  },
  {
    name: "Domain",
    selector: row => row.domain,
    sortable: true,
  },
  {
    name: "Incubation Support",
    selector: row => row.incubationSupport || "None",
    wrap: true,
  },
  {
    name: "Current Status",
    selector: row => row.currentStatus,
    sortable: true,
  },
  {
    name: "Website/Link",
    selector: row => row.websiteOrLink,
    cell: row =>
      row.websiteOrLink ? (
        <a
          href={row.websiteOrLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit
        </a>
      ) : (
        "N/A"
      ),
  },
];
