import React, { useState } from 'react'
import './style.css'

const Task6 = () => {
  const [userList,setUserList]=useState([])
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("")
  const [userEmail, setUserEmail] = useState("")

  function handleFormSubmit(e) {
    console.log(e.target)
    e.preventDefault()
    alert("submitted succesfully")
    const user = {
      userName,
      userEmail,
      userPassword
    }
    // setUserList([...userList,user])    //First Method without Prev 
    setUserList(prev => [...prev, user])  


  
  }
  
  console.log(userList)
  
  return (
    <>
      <div className="formBody" >
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleFormSubmit}>
          <label htmlFor="userName">UserName</label>
          <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="userEmail" id='userEmail' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
          <label htmlFor="userPassword">Password</label>
          <input type="password" name='userPassword' id='userPassword' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
          <button>submit</button>
        </form>          
      </div>
    </>
  )
}

export default Task6
