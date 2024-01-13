import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import meetingRoomImg from "../assets/meetingroomimg.jpg"
import contactBookIcon from "../assets/contactbookicon.png"

const Login = () => {
  const [employeeId, setEmployeeId] = useState("")
  const [pass, setPass] = useState("")

  const navigate = useNavigate()

  const handleLogin = () => {
    let obj = {
      employeeId,
      pass
    }

    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json()).then(res => {
      console.log(res)
      if (res.role === "employee") {
        navigate("/employeedashboard")
      } else if (res.role === "admin") {
        navigate("/admindashboard")
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex"
    }}>
      <div style={{ border: "1px solid pink", 
      width: "70%", 
      height: "100%" }}>
        <img className='img-fluid' src={meetingRoomImg} />
      </div>
      <div style={{ margin:"auto", 
      width:"30%"}}>
        <img src={contactBookIcon} style={{width:"50px"}} /><br/>
        <input type="text"
          placeholder='Employee ID'
          className='mt-2'
          style={{width:"80%"}}
          onChange={(e) => setEmployeeId(e.target.value)}
        /><br />
        <input type="text"
          placeholder='Password'
          className='my-2'
          style={{width:"80%"}}
          onChange={(e) => setPass(e.target.value)} /><br />
        <button type="button" class="btn btn-primary" onClick={handleLogin} >Login</button>
      </div>
    </div>

  )
}

export default Login
