import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[input,setInput]=useState([
        {
            email:"",
            password:"",
        }
    ])
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const navigate=useNavigate()
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3002/api/registeration/login",input).then((response)=>{
            console.log(response.data)
            if(response.data.status==="success")
            {
                alert("login success")
                navigate("/home")
            }
            else{
                alert("invalid credentials")
            }

        })
    }
    
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EmailID</label>
                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readvalues}>Login</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
