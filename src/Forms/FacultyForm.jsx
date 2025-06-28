import { Input } from 'postcss'
import React from 'react'
import { useForm } from 'react-hook-form'
import InputBox from '../components/InputBox'
import { SelectBox } from '../components/SelectBox'

function FacultyForm() {

    const { register, handleSubmit } = useForm()
    const ageOptions = [20, 30]
    const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBox label="First Name" register={register} required />
      <SelectBox options={ageOptions} label="Age" register={register} />
      <CalenderBox />
      <input type="submit" />
    </form>
  )
}



export default FacultyForm