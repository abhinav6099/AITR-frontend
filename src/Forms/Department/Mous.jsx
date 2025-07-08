import React from 'react'
import InputBox from '../../components/InputBox'
import { useForm } from 'react-hook-form';



function Mous() {
    const { register, handleSubmit, reset } = useForm();
  return (
    <div>
        <InputBox label="id" name={"recipientId"} register={register} required />
    </div>
  )
}

export default Mous