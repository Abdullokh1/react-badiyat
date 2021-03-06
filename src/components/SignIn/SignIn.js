import React from 'react'
import './SignIn.scss'
import formImg2 from '../../assets/img/form2-img.png'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'




export default function SignIn() {
  return (
    <form className='form-part '>
      <div className='d-flex align-items-center'>
        <div>
          <img className='form-img' src={formImg2} alt="formImg" />
        </div>

        <div className='col-6  form-right-part'>
          <div className='left-text'>
            <h2 className='form-title'>Sign in</h2>
            <span className='form-info me-2'>Do not you have an account?</span>
            
            <Link to="/Forum">
              <span>Sign up</span>
            </Link>
          </div>

          <div className='d-flex flex-column mt-4'>
            <TextField
                className='form-inputs form-sign-in'
                id="demo-helper-text-misaligned"
                label="Email"
                type='email'
              />

              <TextField
                className='form-inputs mb-4 form-sign-in'
                id="demo-helper-text-misaligned"
                label="Password"
                type='password'
              />
            <Button className='form-btn' variant="contained">Next step</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
