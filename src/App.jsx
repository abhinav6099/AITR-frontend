import { useState } from 'react'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import AddFaculty from './AddDataForms/FacultyData'
import AddAwards from './AddDataForms/AwardsData'


import HomePage from './pages/HomePage'
import Admin from './pages/Admin'

import Navbar from './components/Navbar'
import Accordian from './components/Accordian'






function App() {




  return (
    <>
    <Accordian />
    {/* <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="addfaculty" element={<AddFaculty />} />
          <Route path="addawards" element={<AddAwards />} />
          </Route>
      </Routes>
    </BrowserRouter> */}
    </>

  )
}

export default App
