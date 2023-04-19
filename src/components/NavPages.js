import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import EmployeeManagement from './EmployeeManagement'
import AddEmployee from './AddEmployee'
import HRProfile from './HRProfile'
import Login from './Login'
import ForgetPassword from './ForgetPassword'


function NavPages() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/empmanagement" element={<EmployeeManagement/>} />
        <Route path='/empmanagement/addemployee' element={<AddEmployee/>}/>
        <Route path='/hrprofile' element={<HRProfile/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
      </Routes>

    </div>
  )
}

export default NavPages
