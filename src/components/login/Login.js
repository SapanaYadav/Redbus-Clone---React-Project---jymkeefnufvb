import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';


export function Login() {
  const [user,setUser]=useState('');
  const [pass,setPass]=useState('');
  const navigate = useNavigate();

  const submit=(e)=>{
      e.preventDefault()
      
      const id =localStorage.getItem('email')
      const pd= localStorage.getItem('password')
      console.log(id);
      console.log(pd);
      if(id===user&&pd===pass){
          // Navigate(to={'/home'});
          navigate('/');
      }
      else{
          alert('enter valid username or password')
      }
  }
  return (
      <div className='login-main'>
          <div className='login'>
              <div className='login-img'>
                  {/* <img src={redbus_logo} alt="loading..." className='image' /> */}
              </div>
              <div className='login-form'>
                  <form onSubmit={submit}>
                      <div className='mail'>
                          <label htmlFor="email">EMAIL *  :</label>
                          <br />
                          <input
                              type="email"
                              id='email'
                              onChange={(e)=>setUser(e.target.value)}

                              className='com'
                              placeholder='Enter registerd ID'
                              required
                          />
                      </div>
                      <div className='password mail'>
                          <label htmlFor="pass">PASSWORD * : </label>
                          <br />
                          <input
                              type="password"
                              onChange={(e)=>setPass(e.target.value)}
                              id='pass'
                              className='com'
                              placeholder='Enter password'
                              required
                          />

                      </div>

                      <div className='button'>
                          <button type='submit' className='btn-in'> SUBMIT</button>
                      </div>



                  </form>
                  <Link to={'/Signup'} className='register' >
                      <button>for new users</button>
                      
                  </Link>


              </div>
          </div >
      </div >
  )
}
 export default Login;