import React, { useEffect, useState } from 'react';
import ExtraCurricularForm from '../Forms/StudentForms/ExtraCurricularForm';
import StudentTable from '../table/StudentTable';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function AddExtraCurricular() {

  const { register, handleSubmit, reset } = useForm()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/students/extracurriculars")
      console.log(data.data)
      setData(data.data.extraCurriculars)
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
          eventParticipationId: data.eventParticipationId,
          studentName: data.studentName,
          enrollmentNumber: data.enrollmentNumber,
          batch: data.batch,
          branch: data.branch,
          year: data.year,
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
      <ExtraCurricularForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <DataTable columns={studentEventColumns} data={data} />
    </div>
  );
}

export default AddExtraCurricular;


export const studentExtraCurricularColumns = [
  {
    name: "ID",
    selector: row => row.eventParticipationId,
    sortable: true,
  },
  {
    name: "Student Name",
    selector: row => row.studentName,
    sortable: true,
  },
  {
    name: "Enrollment Number",
    selector: row => row.enrollmentNumber,
  },
  {
    name: "Branch",
    selector: row => row.branch,
  },
  {
    name: "Batch",
    selector: row => row.batch,
  },
  {
    name: "Year",
    selector: row => row.year,
  },
  {
    name: "Event Name",
    selector: row => row.eventName,
  },
  {
    name: "Event Date",
    selector: row => new Date(row.eventDate).toLocaleDateString(),
  },
  {
    name: "Event Level",
    selector: row => row.eventLevel,
  },
  {
    name: "Event Location",
    selector: row => row.eventLocation,
  },
  {
    name: "Position",
    selector: row => row.position,
  },
  {
    name: "Certificate PDF",
    cell: row =>
      row.fileId ? (
        <a
          href={row.fileId}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View
        </a>
      ) : (
        "N/A"
      ),
  },
  {
    name: "Organizer",
    selector: row => row.organizer,
  },
  {
    name: "Coach Name",
    selector: row => row.coachName,
  },
];

