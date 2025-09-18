import React, { useEffect, useState } from 'react';
import ProfessionalMembershipForm from '../../Forms/StudentForms/proffessionalMembership'
import ProfessionalMembershipTable from '../../table/ProfessionalMembershipTable'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProfessionalMembership = () => {
  
  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)


  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/students/memberships")
      console.log(data.data)
      setData(data.data.membershipCertificates)
    }
 
  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  },[loading])

  const onSubmit = async (data) => {

    try {


      // const res = await axios.post("http://localhost:3000/file", formData)
      // console.log(res.data)

      const url = "http://localhost:3000/api/v1/students/membership"
      const response = await axios.post(url
        , {
          organizationName: data.organizationName,
          membershipId: data.membershipId,
          dateOfJoining: data.dateOfJoining,
          membershipStatus: data.membershipStatus
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
      <ProfessionalMembershipForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <ProfessionalMembershipTable data={data} />
    </div>
  );
};

export default AddProfessionalMembership;
