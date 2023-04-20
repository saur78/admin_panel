import React, { useEffect, useState } from "react";
import "../css/EmployeeManagement.css";
import { Link } from "react-router-dom";
import { Checkbox, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function EmployeeManagement() {
  const [query,setQuery] = useState("");
  const [employees,setEmployees]= useState([])
  const [page, setPage] = useState(1);
  const rowsPerPage=10;
  const totalPage=Math.ceil((employees.length-1)/10);




  useEffect(() => {
    fetch("https://64345836582420e2317a1ece.mockapi.io/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []); 


  const columns = [
    { id: "empid", label: "Employee No." },
    { id: "name", label: "Name" },
    { id: "location", label: "Location" },
    { id: "startDate", label: "Start Date" },
    { id: "endDate", label: "End Date" },
    { id: "active", label: "Active" },
    { id: "action", label: "Action" },
  ];
  

  const handleDelete = (empid) => {
  fetch(`https://64345836582420e2317a1ece.mockapi.io/employees/${empid}`, {
    method: 'DELETE'
    })

    .then(response => response.json())
        .then((data)=> {
          console.log(data);
            const updatedEmployees = employees.filter(data => empid !==data.empid)
            setEmployees(updatedEmployees)
            
        })
  };
  
  const handleResetPassword = (empid) => {

  };

  const handleSort =() =>{

  }


  const handleFilter =() =>{
    
  
  }



  const handleChangePrevious = () =>{
    if (page!==1){
    setPage(page - 1);
  }
  }

  const handleChangeNext = () =>{
    if (page<totalPage){
    setPage(page + 1);
  }
}





  return (
    <>

      <div className="empMngmt">
        <div className="empMngmtHeader">
          <h2>Employee Management</h2>
          <div className="empSearch ">
            <input 
            placeholder="Search by name,number or email" 
            onChange={(e) => setQuery(e.target.value.toLowerCase())} />
          </div>
          <div className="empFilter buttonHeader">
            <p onClick={handleFilter}>Filter</p>
          </div>
          <div className="empSort buttonHeader">
            <p onClick={handleSort}>Sort</p>
          </div>
          <Link to='/empmanagement/addemployee'><button className="empAddEmp">+Add Employee</button></Link>
        </div>
        <div className="empData">



          <h3>Employee List</h3>


          <TableContainer component={Paper}>
        <Table>
          <TableHead className="thead">
          <TableRow>
              {columns.map((column) => (
                <TableCell
                className="tableCell"
                key={column.id}>
                  {column.id === "empid" ? <Checkbox /> : null}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees
                         
            .filter(item=>item.name.toLowerCase().includes(query))
            .slice((page-1 )* rowsPerPage, (page-1) * rowsPerPage + rowsPerPage)       
            .map((employee) => (
             
             <TableRow key={employee.empid}>
                <TableCell > <Checkbox />{employee.empid}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell >{employee.location}</TableCell>
                <TableCell >{employee.startDate}</TableCell>
                <TableCell >{employee.endDate}</TableCell>
                <TableCell >
                  <Switch checked={employee.active} />
                </TableCell>
                <TableCell ><p className="deleteEmployee" onClick={()=>handleDelete(employee.empid)}>Delete</p> <p className="resetPwd" onClick={handleResetPassword}>Reset Password</p></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="tableFooter">
        <div className="footerButton">
          <div className="buttonChangePrevious" onClick={handleChangePrevious}>Previous</div>
          <div className="buttonChangeNext activeButton" onClick={handleChangeNext}>Next</div>
        </div>
        <div className="footerPageInfo">
          <p className="pageInfo"><span>{page}</span> of{totalPage}</p>
        </div>
      </div>




        </div>
      </div>
    </>
  );
}

export default EmployeeManagement;
