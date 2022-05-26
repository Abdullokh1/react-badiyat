import React, { useState } from 'react'
import './Forum.scss'
import formImg from '../../assets/img/form1-img.png'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'




export default function Forum({ 
  setName,
  setLastName,
  setPhone,
  setEmail,
  setJob}) {
 

   let [isValid, setValid] = useState(true)


    const addNameHandler = (e) =>{
      if(e.target.value.match(/[0-9]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)
      }
      setName(e.target.value)
    }

    const addLastNameHandler = (e) =>{
      if(e.target.value.match(/[0-9]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setLastName(e.target.value)
    }

    const addNumberHanlder = (e) =>{
      if(e.target.value.length < 10){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setPhone(e.target.value)
    }

    const addEmailHandler = (e) =>{
      if(!e.target.value.match(/[@]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setEmail(e.target.value)
    }
    
    const addJobHandler = (e) =>{
      if(e.target.value.match(/[!@#$%^&*()_+]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setJob(e.target.value)
    }

 

  return (
    <div className='form-part'>
      <div className='d-flex '>
        <div>
          <img className='form-img' src={formImg} alt="formImg" />
        </div>

        <div className='col-6 form-right-part'>
          <Link to='/'>
            <p className='form-back d-flex align-items-center'><i className='bx me-1 bxs-left-arrow'></i>Back to Home</p>
          </Link>

          <div className='left-text'>
            <h2 className='form-title'>Sign up</h2>
            <span className='form-info me-2'>Already have an account?</span>
            <Link to="/SignIn">
              <span>Sign in</span>
            </Link>

          </div>
          
          <form  className='d-flex form-group  flex-column'>
            <TextField
              onChange={addNameHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'} form-inputs-names`}
              id="demo-helper-text-aligned"
              label="First name"
              required
            />

            <TextField
              onChange={addLastNameHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-aligned-no-helper"
              label="Last name"
              required
            />
         
            <TextField
              onChange={addNumberHanlder}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-misaligned"
              label="Phone"
              type='number'
              required
            />

            <TextField
              onChange={addEmailHandler}
              className={`form-inputs ${isValid === true ? 'correct' : 'error'}`}
              id="demo-helper-text-misaligned"
              label="Email"
              type='email'
              required
            />

           
           <Link to={`${isValid === true ? '/' : '/Forum'}`}>
             <Button type='submit' className='form-btn' variant="contained">Next step</Button>
           </Link>

          </form>
        </div>
      </div>
    </div>
  )
}
