import React, { useEffect, useState } from 'react';
import SportForm from '../../Forms/StudentForms/SportsForm';
import StudentTable from '../../table/StudentTable'; // Rename to `SportsTable` if it's specific
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function AddSportsData() {

    const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/sports")
      console.log(data.data)
      setData(data.data.sportsData)
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

      const url = "http://localhost:3000/api/v1/students/research-paper"
      const response = await axios.post(url
        , {
          sportsEventId: data.sportsEventId,
          studentName: data.studentName,
          enrollmentNumber: data.enrollmentNumber,
          batch: data.batch,
          branch: data.branch,
          year: data.year,
          sportsName: data.sportsName,
          eventDate: data.eventDate,
          eventName: data.eventName,
          eventLevel: data.eventLevel,
          eventLocation: data.eventLocation,
          position: data.position,
          coachName: data.coachName,
          organizer: data.organizer,

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
      <SportForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <DataTable columns={studentSportsEventColumns} data={data}/>
    </div>
  );
}

export default AddSportsData;

export const studentSportsEventColumns = [
  {
    name: "ID",
    selector: row => row.sportsEventId,
    sortable: true
  },
  {
    name: "Student Name",
    selector: row => row.studentName,
    sortable: true
  },
  {
    name: "Enrollment Number",
    selector: row => row.enrollmentNumber
  },
  {
    name: "Branch",
    selector: row => row.branch
  },
  {
    name: "Batch",
    selector: row => row.batch
  },
  {
    name: "Year",
    selector: row => row.year
  },
  {
    name: "Sports Name",
    selector: row => row.sportsName
  },
  {
    name: "Event Date",
    selector: row => new Date(row.eventDate).toLocaleDateString()
  },
  {
    name: "Event Name",
    selector: row => row.eventName
  },
  {
    name: "Event Level",
    selector: row => row.eventLevel
  },
  {
    name: "Event Location",
    selector: row => row.eventLocation
  },
  {
    name: "Position",
    selector: row => row.position
  },
  {
    name: "Certificate PDF",
    cell: row =>
      row.fileId ? (
        <a href={row.certificatePDF} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View Certificate
        </a>
      ) : (
        "N/A"
      )
  },
  {
    name: "Coach Name",
    selector: row => row.coachName
  },
  {
    name: "Organizer",
    selector: row => row.organizer
  }
];

