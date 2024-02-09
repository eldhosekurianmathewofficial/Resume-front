import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router';
const Resumeadd = () => {
    const[input,setInput]=new useState([
        {
            userId:"",
            objective:"",
            education:"",
            skills:"",
            experience:"",
            Achievements:""
        }
    ])

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/resume/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success") {
                    alert("Succesfully inserted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        )
    }
    const navigate=useNavigate()
    const viewpost=()=>{
        navigate("/posts")
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">UserId</label>
                        <input type="text" className="form-control" name="userId" value={input.userId} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">objective</label>
                        <input type="text" className="form-control" name="objective" value={input.objective} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Education</label>
                        <input type="text" className="form-control" name="education" value={input.education} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">skills</label>
                        <input type="text" className="form-control" name="skills" value={input.skills} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">experience</label>
                        <input type="text" className="form-control" name="experience" value={input.experience} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Achievements</label>
                        <input type="text" className="form-control" name="Achievements" value={input.Achievements} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValues}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">View My Resume</label>
                <br></br>
                <button className="btn btn-success" onClick={viewpost}>View Post</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resumeadd
