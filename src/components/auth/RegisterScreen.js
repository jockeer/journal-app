import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startRegister } from '../../helpers/auth';
import { removeError, setError } from '../../helpers/ui';

import useForm from '../../hooks/useForm'


export const RegisterScreen = () => {

  const dispatch = useDispatch()

  const {msgError} = useSelector( state => state.ui)
  

  const [ formValues, handleInputChange ] = useForm({
    name:'',
    email: '',
    password:'',
    password2:''
  })

  const { name, email, password, password2 } = formValues

  const handleRegister = e => {
    e.preventDefault()

    if (isFormValid()) {
      dispatch(startRegister(name,email,password))
    }
  }

  const isFormValid = () => {
    
    if (name.trim().length === 0 ) {
      dispatch(setError('Name is required'));
      return false
    }
    if (!validator.isEmail(email)) {
      console.log('ss');
      dispatch(setError('Email is not valid!'));
      return false
    }
    if (password !== password2 || password.length < 5) {
      dispatch(setError('passwords should be at least 6 characters and match each other'));
      return false
    }
    dispatch(removeError());
    return true
  }

  return (
    <>
        <h3 className='auth__title mb-5 fw-bold'>Register</h3>

        <form onSubmit={handleRegister}>
          
          {msgError && 
            <div className='alert alert-danger'>
              {msgError}
            </div>
          }
          

          <input type="text" placeholder='name' name='name' value={name} onChange={handleInputChange} className='form-control mb-2'/>
          <input type="text" placeholder='email' name='email' value={email} onChange={handleInputChange} className='form-control mb-2'/>
          <input type="password" placeholder='password' name='password' value={password} onChange={handleInputChange} className='form-control mb-2'/>
          <input type="password" placeholder='confirm password' name='password2' value={password2} onChange={handleInputChange} className='form-control mb-4'/>

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
