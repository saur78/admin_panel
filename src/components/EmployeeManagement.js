import React, { useEffect, useState } from "react";
import "../css/EmployeeManagement.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployees,search } from "../redux/Features/employeesListSlice";

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
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const rowsPerPage = 10;
  const [filterMenu, SetFilterMenu] = useState(false);
  const [sortMenu, SetSortMenu] = useState(false);

  const handleFilterOpen = () => {
    SetFilterMenu(true);
  };

  const handleFilterMouseLeave = () => {
    SetFilterMenu(false);
  };

  const handleSortOpen = () => {
    SetSortMenu(true);
  };

  const handleSortMouseLeave = () => {
    SetSortMenu(false);
  };

  const employeeList = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const totalPage = Math.ceil((employeeList.employees.length - 1) / 10);

  const columns = [
    { id: "user_id", label: "Employee No." },
    { id: "first_name", label: "Name" },
    { id: "country_code", label: "Location" },
    { id: "start_date", label: "Start Date" },
    { id: "end_date", label: "End Date" },
    { id: "is_status", label: "Active" },
    { id: "action", label: "Action" },
  ];

  const handleDelete = (user_id) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/deleteemployee",
      headers: {
        "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
      },
      data: {
        method: "deleteemployee",
        user_id: { user_id },
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(deleteEmployee(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleResetPassword = (user_id) => {};

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
  const handleActive = (user_id, active) => {};



  //converts unix to ist
  function unixToIST(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // convert to milliseconds
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // add leading zero if necessary
    const day = ("0" + date.getDate()).slice(-2); // add leading zero if necessary
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
    console.log(query)
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pihukzd54m.execute-api.ap-southeast-2.amazonaws.com/live/searchemployeefields",
      headers: {
        "x-api-key": "Dt0LK0aaHv3eDtAHuE5Fy7OK8hmIj7Nu1CkTpCmr",
      },
      data: {
        method: "searchemployeefields",
        company_id: 1,
        searchtext: e.target.value,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data)); 
        dispatch(search(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="empMngmt">
        <div className="empMngmtHeader">
          <h2>Employee Management</h2>
          <div className="empSearch">
            <input
              placeholder="Search by name,number or email"
              onChange={handleSearch}
              
            />
          </div>
          <div className="empFilter buttonHeader">
            <p onClick={handleFilterOpen} onMouseLeave={handleFilterMouseLeave}>
              Filter {filterMenu && <Filter />}
            </p>
          </div>
          <div className="empSort buttonHeader">
            <p onClick={handleSortOpen} onMouseLeave={handleSortMouseLeave}>
              Sort {sortMenu && <Sort />}
            </p>
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
                  <Checkbox checked={Boolean(selectedRows.length > 0)} />
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
                <TableRow key={""}>
                  {columns.map((column) => (
                    <TableCell className="tableCell">
                      {column.id === "user_id" ? (
                        <Checkbox
                          checked={Boolean(
                            selectedRows.length ===
                              employeeList.employees.length
                          )}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows(
                                employeeList.employees.map(
                                  (employee) => employee.user_id
                                )
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
                {employeeList.employees
                  .slice(
                    (page - 1) * rowsPerPage,
                    (page - 1) * rowsPerPage + rowsPerPage
                  )
                  .map((employee) => (
                    <TableRow
                      key={employee.user_id}
                      className={
                        selectedRows.includes(employee.user_id)
                          ? "selected"
                          : ""
                      }
                    >
                      <TableCell>
                        <Checkbox
                          checked={Boolean(
                            selectedRows.includes(employee.user_id)
                          )}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows([
                                ...selectedRows,
                                employee.user_id,
                              ]);
                            } else {
                              setSelectedRows(
                                selectedRows.filter(
                                  (id) => id !== employee.user_id
                                )
                              );
                            }
                          }}
                        />
                        {employee.user_id}
                      </TableCell>
                      <TableCell>{employee.first_name}</TableCell>
                      <TableCell>{employee.country_code}</TableCell>
                      <TableCell>{unixToIST(employee.start_date)}</TableCell>
                      <TableCell>{unixToIST(employee.start_date)}</TableCell>
                      <TableCell>
                        <Switch
                          checked={Boolean(employee.is_status)}
                          onChange={() =>
                            handleActive(employee.user_id, employee.active)
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <p
                          className="deleteEmployee"
                          onClick={() => handleDelete(employee.user_id)}
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
