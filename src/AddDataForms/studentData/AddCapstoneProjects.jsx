import React, { useEffect, useState } from 'react';
import CapstoneProjectForm from '../../Forms/StudentForms/CapstoneProjectForm';
import StudentTable from '../../table/StudentTable'; // Replace later if table differs
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function AddCapstoneProjects() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/capstone');
      setData(res.data.projects); // Adjust key from backend
    } catch (err) {
      console.error("Error fetching capstone projects:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

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
      // todo: set the url
      const url = "http://localhost:3000/api/v1/students/extracurricular"
      const response = await axios.post(url
        , {
          projectTitle: data.projectTitle,
          teamMembers: data.teamMembers,
          guideName: data.guideName,
          semester: data.semester,
          industryMentor: data.industryMentor,
          outcome: data.outcome,
          fileId: res.data.fileId,
        }
      )
      console.log(response.data);
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  };

  return (
    <div>
      <CapstoneProjectForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <DataTable columns={CapstoneprojectColumns} />
    </div>
  );
}

export default AddCapstoneProjects;

export const CapstoneprojectColumns = [
  {
    name: "Project Title",
    selector: row => row.projectTitle,
    sortable: true,
  },
  {
    name: "Team Members",
    selector: row => row.teamMembers?.join(", "),
    wrap: true,
  },
  {
    name: "Guide Name",
    selector: row => row.guideName,
  },
  {
    name: "Semester",
    selector: row => row.semester,
  },
  {
    name: "Industry Mentor",
    selector: row => row.industryMentor || "N/A",
  },
  {
    name: "Project Outcome",
    selector: row => row.outcome,
  },
];

// todo: add file downloading schema

