import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../index.css"
import { provider, auth, signInWithRedirect } from '../config';
const SignIn = (event) => {
  event.preventDefault();
  signInWithRedirect(auth, provider);
};


const Home = () => {

  return (
    <div className = "home">
      <nav>
        <h1>MyIsland</h1>
        <ul>
            <li>
          <Link to='/Signup'>Sign Up</Link>
          </li>
          
          <li>
          <Link to='/Login' onClick={SignIn}>Login</Link>
          </li>
          
          <li>
          <Link to='/User'>User</Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
      <h2>Welcome to MyIsland</h2>
    <div className='text'>
      <p>MyIsland is a resort Island available for vacations and relaxing breaks you can sign up if you do not have an existing account or just login if you do</p>
    </div>
  
    
    
    
    </div>
  
  )
}

export default Home
