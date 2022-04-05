import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
        <h3 className='auth__title mb-5 fw-bold'>Login</h3>

        <form>
          <input type="text" placeholder='email' name='email' className='form-control mb-2'/>
          <input type="password" placeholder='password' name='password' className='form-control mb-4'/>

          <div className="d-grid gap-2">
            <button type='submit' className='btn btn-primary'>Login</button>
          </div>
          
          
          <hr />

          <div className='auth__social-networks pb-3 pt-3'>
            <p>Login with social networks</p>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
            </div>

          </div>
          <Link to='/auth/register' className='link'>
            Create new Account
          </Link>

        </form>
    </>
  )
}
