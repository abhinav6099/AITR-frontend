import React from 'react'
import InputBox from '../../components/InputBox'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

function BooksChapteresAuthored() {

      const { register, handleSubmit, reset } = useForm();
      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true)
      const [file, setFile] = useState(null)
    
    
      const fetchData = async () => {
        if (loading == true) {
          const data = await axios.get("http://localhost:3000/api/v1/faculty/books-authored")
          console.log(data.data.books)
          setData(data.data.books)
    
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
    
          const url = "http://localhost:3000/api/v1/faculty/book-authored"
          const response = await axios.post(url
            , {
              facultyName: data.facultyName,
              titleOfTalk: data.titleOfTalkt,
              eventName: data.eventName,
              organizingBody: data.organizingBody,
              date: data.date,
              natureOfEngagement: data.natureOfEngagement
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
                    Books and Chapters
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <InputBox
                            label="Title of Book/Chapter"
                            name="title"
                            register={register}
                            required
                        />

                        <InputBox
                            label="publisher"
                            name="publisher"
                            register={register}
                            required
                        />

                        <InputBox
                            label="isbn"
                            name="isbn"
                            register={register}
                            required
                        />

                        <InputBox
                            label="year_Of_Publication"
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
                    </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                            Submit
                        </button>
                </form>
            </div>
            <DataTable  columns={booksChaptersColumns} data={data}/>
        </div>
    )
}

export default BooksChapteresAuthored

export const booksChaptersColumns = [
  {
    name: 'Title of Book/Chapter',
    selector: row => row.title,
    wrap: true,
    sortable: true
  },
  {
    name: 'Publisher',
    selector: row => row.publisher,
    sortable: true
  },
  {
    name: 'ISBN',
    selector: row => row.isbn
  },
  {
    name: 'Year of Publication',
    selector: row => row.yearOfPublication,
    sortable: true
  },
  {
    name: 'Co-authors (if any)',
    selector: row => row.coAuthors?.join(', ') || 'N/A',
    wrap: true
  }
];
