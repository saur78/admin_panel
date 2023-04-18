import React, { useEffect, useState } from "react";
import {Checkbox,Paper,Switch,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@mui/material";
import '../css/EmployeeListTable.css'





function EmployeeListTable(query) {

  
  const [employees, setEmployees] = useState([]);

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
    <div>
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
                         
            .filter(item=>item.name.toLowerCase().includes(query.query))
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
  );
}

export default EmployeeListTable;
