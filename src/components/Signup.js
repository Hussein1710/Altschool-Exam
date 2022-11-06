import React from 'react'
import { Outlet } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
        <p>Sign Up</p>
      <form>
        <label>
          Name:
        <input className='signup-input' type="text" placeholder="Enter your full name"/>
        </label>
        <label>
          Phone number:
        <input className='signup-input' type="tel" placeholder="Enter your phone number"/>
        </label>
        <label>
          Email:
        <input className='signup-input' type="email" placeholder="Enter a valid email"/>
        </label>
        <label>
          Age:
        <input className='signup-input' type="number" placeholder="Enter your age"/>
        </label>
        <label>
          Password:
        <input className='signup-input' type="password" placeholder="Enter a valid password"/>
        </label>
        
        <label>
          Confirm Password:
        <input className='signup-input' type="password" placeholder="Enter a valid password"/>
        </label>
      <input type="submit" className='btn' value='submit'/> 
      </form>
      <Outlet />
      
    </div>
  )
}

export default Signup
