import React from 'react'
import { provider, auth, signInWithRedirect } from '../config';
 
const SignIn = (event) => {
  event.preventDefault();
  signInWithRedirect(auth, provider);
};

function Login() {
  return (
     <div className='signup'>
        <p>Login</p>
      <form>
        <label>
          Email:
          <input className='signup-input' type="email" placeholder="Enter your email"/>
        </label>
        <label>
          Password
          <input className='signup-input' type="password" placeholder="Enter a valid password"/>
        </label>
        <input type="submit" className='btn' value='submit'/>
    </form>

       </div> 
  )
}

export default Login