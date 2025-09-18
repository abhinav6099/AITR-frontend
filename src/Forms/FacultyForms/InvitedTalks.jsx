import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import FileBox from '../../components/FileBox'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import DataTable from 'react-data-table-component'

function InvitedTalks() {


  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if (loading == true) {
      const data = await axios.get("http://localhost:3000/api/v1/faculty/invited-talks")
      console.log(data.data.talks)
      setData(data.data.talks)

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

      const url = "http://localhost:3000/api/v1/faculty/invited-talk"
      const response = await axios.post(url
        , {
          facultyName: data.facultyName,
          organizationName: data.organizationNamet,
          membershipType: data.membershipType,
          membershipId: data.membershipId,
          dateOfJoining: data.dateOfJoining,
          currentStatus: data.currentStatus,
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
    <div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Invited Talks
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputBox
              label="faculty_Name"
              name="facultyName"
              register={register}
              required
            />

            <InputBox
              label="title_Of_Talk"
              name="titleOfTalk"
              register={register}
              required
            />

            <InputBox
              label="event_Name"
              name="eventName"
              register={register}
              required
            />

            <InputBox
              label="organizing_Body"
              name="organizingBody"
              register={register}
              required
            />

            <CalenderBox
              label="date"
              name="date"
              register={register}
              required
            />

            <SelectBox
              label="nature_Of_Engagement"
              name="natureOfEngagement"
              register={register}
              options={[
                "Keynote",
                "Panelist",
                "Speaker",
              ]}
              required
            />

            <FileBox
              label="certificate_Url"
              name="file"
              register={register}
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      <DataTable columns={facultyTalkColumns} data={data} />
    </div>
  )
}


export default InvitedTalks

export const facultyTalkColumns = [
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true
  },
  {
    name: 'Title of Talk/Session',
    selector: row => row.titleOfTalk,
    wrap: true
  },
  {
    name: 'Event Name',
    selector: row => row.eventName,
    wrap: true
  },
  {
    name: 'Organizing Body',
    selector: row => row.organizingBody
  },
  {
    name: 'Date',
    selector: row => row.date,
    format: row => new Date(row.date).toLocaleDateString()
  },
  {
    name: 'Nature of Engagement',
    selector: row => row.natureOfEngagement // Keynote / Panelist / Speaker
  },
  {
    name: 'Certificate',
    selector: row => row.fileId,
    cell: row => (
      <a
        href={row.certificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    )
  }
];
