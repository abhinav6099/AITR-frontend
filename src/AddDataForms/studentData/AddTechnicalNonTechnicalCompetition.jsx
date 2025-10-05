import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import TechnicalNonTechnicalCompetition from '../../Forms/StudentForms/TechnicalNonTechnicalCompetition';
import UploadForm from '../../components/UploadForm';

function AddTechnicalNonTechnicalCompetition() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([])
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(true)
  const [submit, setSubmit] = useState(false)


  const fetchData = async () => {
    if (loading == true) {
      // todo : set the url
      const data = await axios.get("http://localhost:3000/api/v1/students/technicalNontechnical")
      console.log(data.data)
      setData(data.data.technicalData)
    }

  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  }, [loading])

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.querySelector("input[type='file']");
    if (fileInput?.files[0]) {
      formData.append("file", fileInput.files[0]);
    }
    try {
      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)
        // todo: correct the url
        const url = "http://localhost:3000/api/v1/students/technicalNontechnical"
        const response = await axios.post(url
          , {
            competitionId: data.competitionId,
            studentName: data.studentName,
            enrollmentNumber: data.enrollmentNumber,
            currentStatus: data.currentStatus,
            wesiteLink: data.wesiteLink,
            branch: data.branch,
            batch: data.batch,
            year: data.year,
            competitionName: data.competitionName,
            date: data.date,
            teamName: data.teamName,
            teamSize: data.teamSize,
            mentorName: data.mentorName,
            level: data.level,
            organizer: data.organizer,
            vanue: data.vanue,
            problemStatement: data.problemStatement,
            datahnologyUsed: data.datahnologyUsed,
            prizeMoney: data.prizeMoney,
            sponsoringAgency: data.sponsoringAgency,
            positionSecured: data.positionSecured,
            projectGithubLink: data.projectGithubLink,
            projectDescription: data.projectDescription,
            certificatePdf: data.certificatePdf,
            eventMode: data.eventMode,
            achievement: data.achievement,
            fileId: res.data.fileId,
          }
        )
        console.log(response.data)
      }
      catch (error) {
      console.error("Error occurred:", error.message);
    }
    console.log(data)

    setLoading((p) => !p)
  }



  return (
    <div>
      <UploadForm />
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
    selector: row => row.branch,
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
    selector: row => row.fileId,
    cell: row =>
      row.fileId ? (
        <a
          href={`http://localhost:3000/file/${row.fileId}`}
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
              alert(`Deleting this ${row.competitionId}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/students/technicalNontechnical"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }
];
