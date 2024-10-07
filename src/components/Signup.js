import React from 'react';
import {useNavigate} from 'react-router-dom';
function Signup() {
    const navigate=useNavigate();
    const handleSubmit=(()=>{
        navigate('/home')
    })
    const handleCancel=(()=>{
      navigate('./Logout')
    })
  return (
    <div>
        <h2>Signup</h2>
    <form>
        
        <label html For='name'>Username</label>
        <input type='text' id='Username'></input><br/>
        <label htmlFor='e-mail'>E-Mail</label>
        <input type='text' placeholder='E-Mail'></input><br/>
        <label htmlFor='Password'></label>
        <input type='text' placeholder='Password'></input><br/>
        <button onClick={handleSubmit}>Login</button>
        <button onClick={handleCancel}>Cancel</button>
</form>
</div>
  )
}

export default Signup