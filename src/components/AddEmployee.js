import React from "react";
import "../css/AddEmployee.css";
import { Link } from "react-router-dom";

function AddEmployee() {
  const handleAddEmp = () => {

    };

  return (
    <div>
      <div className="formContainer">
        <div className="formContainerHeader">
          <h1>Add Employee</h1>
          <p>Add the following details to add new employee</p>
        </div>

        <form className="form">
          <div className="formleft">
            <div className="formLabel marginLable">
              <label>Full Name <span>*</span></label>
            </div>
            <div className="formInput">
              <input type="text" placeholder="What is full name of member" />
              <br />
            </div>

            <div className="formLabel">
              <label>Location <span>*</span></label>
            </div>
            <div className="formInput">
              <input type="text" placeholder="Please enter valid address" />
              <br />
            </div>

            <div className="formLabel">
              <label>Start Date</label>
            </div>
            <div className="formInput">
              <input
                type="text"
                placeholder="Set start date"
              />
              <br />
            </div>

            <div className="formLabel">
              <label>End Date</label>
            </div>
            <div className="formInput">
              <input
                type="text"
                placeholder="Set end date"
              />
            </div>
            <div className="buttonDiv">
            <Link to='/empmanagement'><button className="buttonCancel">Cancel</button></Link>
            <button className="buttonDone" onClick={handleAddEmp}>Done</button>
            </div>
          </div>

          <div className="formRight">
            <div className="formLabel marginLable">
              <label>Employee Number</label>
            </div>
            <div className="formInput">
              <input type="text" placeholder="What is the Employee number"/>
              <br />
            </div>

            <div className="formLabel">
              <label>Email Id <span>*</span></label>
            </div>
            <div className="formInput">
              <input type="email" placeholder="What is the email id" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
