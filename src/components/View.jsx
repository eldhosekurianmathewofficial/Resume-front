import React, { useEffect, useState } from 'react'
import axios from "axios";
const View = () => {
    const[output,setOutput]= new useState([])
    const getData=()=>{
        axios.get("").then(
            (response)=>{
                setOutput(response.data)
                console.log(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        
    </div>
  )
}

export default View
