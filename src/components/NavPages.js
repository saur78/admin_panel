import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import EmployeeManagement from './EmployeeManagement'
import AddEmployee from './AddEmployee'
import HRProfile from './HRProfile'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'



function NavPages() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login/>} />
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/empmanagement" element={<PrivateRoute><EmployeeManagement/></PrivateRoute>} />
        <Route path="/empmanagement/addemployee" element={<PrivateRoute><AddEmployee/></PrivateRoute>} />
        <Route path="/hrprofile" element={<PrivateRoute><HRProfile/></PrivateRoute>} />
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>

    </div>
  )
}

export default NavPages
