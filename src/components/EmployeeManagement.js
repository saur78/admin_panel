import React, { useEffect, useState } from "react";
import "../css/EmployeeManagement.css";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Filter from "./Filter";
import Sort from "./Sort";


function EmployeeManagement() {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [activeSwitch,setActiveSwitch]=useState();
  const rowsPerPage = 10;
  const totalPage = Math.ceil((employees.length - 1) / 10);
  const [filterMenu, SetFilterMenu]=useState(false);
  const [sortMenu, SetSortMenu]=useState(false);


  const handleFilterOpen=()=>{
    SetFilterMenu(true)    
  };

  const handleFilterMouseLeave = () => {
    SetFilterMenu(false);
  };

  const handleSortOpen=()=>{
    SetSortMenu(true)    
  };

  const handleSortMouseLeave = () => {
    SetSortMenu(false);
  };

  useEffect(() => {
    fetch("https://64345836582420e2317a1ece.mockapi.io/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setActiveSwitch(data.active)
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
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedEmployees = employees.filter(
          (data) => empid !== data.empid
        );
        setEmployees(updatedEmployees);
      });
  };

  const handleResetPassword = (empid) => {};


  const handleChangePrevious = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleChangeNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  const handleActive = (empid, active) => {
    console.log(empid)
    setActiveSwitch(active)
    console.log(activeSwitch)
    fetch(`https://64345836582420e2317a1ece.mockapi.io/empoyees/${empid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: {activeSwitch},
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

  };

  return (
    <>
      <div className="empMngmt">
        <div className="empMngmtHeader">
          <h2>Employee Management</h2>
          <div className="empSearch ">
            <input
              placeholder="Search by name,number or email"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </div>
          <div className="empFilter buttonHeader">
            <p onClick={handleFilterOpen} onMouseLeave={handleFilterMouseLeave}>Filter { filterMenu && <Filter/>}</p>
          </div>
          <div className="empSort buttonHeader">
            <p onClick={handleSortOpen} onMouseLeave={handleSortMouseLeave}>Sort { sortMenu && <Sort/>}</p>
          </div>
          <Link to="/empmanagement/addemployee">
            <button className="empAddEmp">+Add Employee</button>
          </Link>
        </div>
        <div className="empData">
          <h3>Employee List</h3>
          <TableContainer component={Paper}>
            {selectedRows.length > 0 ? (
              <div className="tableAction">
                <div className="uncheckSelected">X</div>
                <div className="selectedRowNum">
                  <Checkbox checked={selectedRows.length > 0 ? true : false} />
                  {selectedRows.length}
                </div>
                <div className="tableActionButton">Move</div>
                <div className="tableActionButton">Delete</div>
                <div className="tableActionButton">Raise Issue</div>
                <div className="tableActionButton">Status</div>
                <div className="tableActionButton">Start Date</div>
                <div className="tableActionButton">End Date</div>
              </div>
            ) : null}
            <Table>
              <TableHead className="thead">
                <TableRow key={"empid"}>
                  {columns.map((column) => (
                    <TableCell className="tableCell">
                      {column.id === "empid" ? (
                        <Checkbox
                          checked={selectedRows.length === employees.length}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows(
                                employees.map((employee) => employee.empid)
                              );
                            } else {
                              setSelectedRows([]);
                            }
                          }}
                        />
                      ) : null}
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {employees
                  .filter((item) => item.name.toLowerCase().includes(query))
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((employee) => (
                    <TableRow
                      key={employee.empid}
                      className={
                        selectedRows.includes(employee.empid) ? "selected" : ""
                      }
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.includes(employee.empid)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows([
                                ...selectedRows,
                                employee.empid,
                              ]);
                            } else {
                              setSelectedRows(
                                selectedRows.filter(
                                  (id) => id !== employee.empid
                                )
                              );
                            }
                          }}
                        />
                        {employee.empid}
                      </TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.location}</TableCell>
                      <TableCell>{employee.startDate}</TableCell>
                      <TableCell>{employee.endDate}</TableCell>
                      <TableCell>
                        <Switch
                          checked={employee.active}
                          onChange={() => handleActive(employee.empid,employee.active)}
                        />
                      </TableCell>
                      <TableCell>
                        <p
                          className="deleteEmployee"
                          onClick={() => handleDelete(employee.empid)}
                        >
                          Delete
                        </p>
                        <p className="resetPwd" onClick={handleResetPassword}>
                          Reset Password
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="tableFooter">
            <div className="footerButton">
              <div
                className="buttonChangePrevious"
                onClick={handleChangePrevious}
              >
                Previous
              </div>
              <div
                className="buttonChangeNext activeButton"
                onClick={handleChangeNext}
              >
                Next
              </div>
            </div>
            <div className="footerPageInfo">
              <p className="pageInfo">
                <span>{page}</span> of{totalPage}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default EmployeeManagement;
