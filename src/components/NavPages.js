import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import EmployeeManagement from './EmployeeManagement'
import AddEmployee from './AddEmployee'
import HRProfile from './HRProfile'

function NavPages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/empmanagement" element={<EmployeeManagement/>} />
        <Route path='/empmanagement/addemployee' element={<AddEmployee/>}/>
        <Route path='/hrprofile' element={<HRProfile/>}></Route>
      </Routes>

    </div>
  )
}

export default NavPages
