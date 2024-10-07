import React from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {
    const navigate=useNavigate();
    const handleSubmit=(()=>{
        navigate('/Home')
    })
    const handleCancel=(()=>{
      navigate('./Logout')
    })
  return (
    <form>
        <h2>Register Page</h2>
        <label>Username</label>
        <input type='text' id='Username'></input><br/>

        <label>E-Mail</label>
        <input type='text' placeholder='E-Mail'></input><br/>

        <label>Password</label>
        <input type='text' placeholder='Password'></input><br/>

        <button onClick={handleSubmit}>Login</button>
        <button onClick={handleCancel}>Cancel</button>
</form>
  )
}

export default Login;