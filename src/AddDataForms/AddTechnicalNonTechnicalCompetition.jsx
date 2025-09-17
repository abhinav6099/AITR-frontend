import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import TechnicalNonTechnicalCompetition from '../Forms/StudentForms/TechnicalNonTechnicalCompetition';

function AddTechnicalNonTechnicalCompetition() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([])
  const [file, setFile] = useState();
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
      <TechnicalNonTechnicalCompetition
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <DataTable data={data} columns={TechnicalNonTechnicalCompetitionColumn} />
    </div>
  );
}

export default AddTechnicalNonTechnicalCompetition;

export const TechnicalNonTechnicalCompetitionColumn = [
  {
    name: "ID",
    selector: row => row.id,
    sortable: true,
  },
  {
    name: "Student name",
    selector: row => row.studentName,
    sortable: true,
  },
  {
    name: "Enrollment Number",
    selector: row => row.enrollmentNumber,
    wrap: true,
  },
  {
    name: "Branch",
    selector: row => row.brach,
    sortable: true,
  },
  {
    name: "Batch",
    selector: row => row.batch,
    sortable: true,

  }, {
    name: "year",
    selector: row => row.year,
    sortable: true,

  },
  {
    name: "Competiontion Name",
    selector: row => row.competiontionName,
    sortable: true,

  },
  {
    name: "Date",
    selector: row => row.date,
    sortable: true,

  },
  {
    name: "Team Name",
    selector: row => row.teamName,
    sortable: true,

  },
  {
    name: "Team Size",
    selector: row => row.teamSize,
    sortable: true,

  },
  {
    name: "Mentor Name",
    selector: row => row.mentorName,
    sortable: true,

  },
  {
    name: "Level",
    selector: row => row.level,
    sortable: true,

  },
  {
    name: "Organizer",
    selector: row => row.organizer,
    sortable: true,

  },
  {
    name: "Vanue",
    selector: row => row.vanue,
    sortable: true,

  },
  {
    name: "Problem Statement",
    selector: row => row.problemStatement,
    sortable: true,

  },
  {
    name: "Technology Used",
    selector: row => row.technologyUsed,
    sortable: true,

  },
  {
    name: "Prize Money",
    selector: row => row.prizeMoney,
    sortable: true,
  },
  {
    name: "Sponsoring Agency",
    selector: row => row.sponsoringAgency,
    sortable: true,
  },
  {
    name: "Position Secured",
    selector: row => row.positionSecured,
    sortable: true,
  },
  {
    name: "Project GitHub Link",
    selector: row => row.projectGithubLink,
    cell: row => (
      <a href={row.projectGithubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {row.projectGithubLink}
      </a>
    ),
    sortable: false,
  },
  {
    name: "Project Description",
    selector: row => row.projectDescription,
    sortable: true,
    wrap: true, // enables multi-line text
  },
  {
    name: "Certificate PDF",
    selector: row => row.certificatePdf,
    cell: row =>
      row.certificatePdf ? (
        <a
          href={row.certificatePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View PDF
        </a>
      ) : (
        "N/A"
      ),
    sortable: false,
  },
  {
    name: "Event Mode",
    selector: row => row.eventMode,
    sortable: true,
  },
  {
    name: "Achievement (Participation/Winner/Rank)",
    selector: row => row.achievement,
    sortable: true,
  },


];
