import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
        <h3 className='auth__title mb-5 fw-bold'>Register</h3>

        <form>
          <input type="text" placeholder='name' name='name' className='form-control mb-2'/>
          <input type="text" placeholder='email' name='email' className='form-control mb-2'/>
          <input type="password" placeholder='password' name='password' className='form-control mb-2'/>
          <input type="password" placeholder='confirm password' name='password2' className='form-control mb-4'/>

          <div className="d-grid gap-2">
            <button type='submit' className='btn btn-primary'>Register</button>
          </div>
          
          
          <hr />

          <Link to='/auth/login' className='link'>
            Already registered?
          </Link>

        </form>
    </>
  )
}
