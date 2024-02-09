import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [input, setInput] = new useState([
    {
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  ]);

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const readValues = () => {
    console.log(input);
    axios
      .post("http://localhost:3002/api/registeration/signup", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Succesfully inserted");
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
                  Age:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={input.age}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={inputHandler}
                />
              </div>
              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-lab">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>
                  Add Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
