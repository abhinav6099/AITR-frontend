import React from 'react'
import InputBox from '../../components/InputBox'
import { useForm } from 'react-hook-form'   

function booksChapteresAuthored() {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Books/Chapters Authored Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">

        <InputBox
            label="Title of Book/Chapter"
            name="title"
            register={register}
            required
        />

        <InputBox
            label="Publisher"
            name="publisher"
            register={register}
            required
        />

        <InputBox
            label="ISBN"
            name="isbn"
            register={register}
            required
        />

        <InputBox
            label="Year of Publication"
            name="yearOfPublication"
            register={register}
            type="number"
            required
        />

        <InputBox
            label="Co-authors (if any)"
            name="coAuthors"
            register={register}
            placeholder="Comma-separated names (e.g., John Doe, Jane Smith)"
        />

        <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
            Submit
        </button>
        </form>

    </div>
  )
}

export default booksChapteresAuthored