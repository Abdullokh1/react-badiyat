import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Edit.scss'

export default function Edit({
  name,
  setName,
  lastName,
  setLastName,
  phone,
  setPhone,
  email,
  setEmail,
  job,
  setJob

}) {
  return (
    <>
      <section className='edit'>
        <div className='container'>
          <div className='d-flex'>
            <div className='user-hero-img edit-img-wrapper'>
                <img className='user-hero-main-img' src="https://i.pinimg.com/550x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" width='165' height='166'/>
              <div className='user-hero__star__wrap'>
                <span className='user-hero__ornament user-hero__second d-flex align-items-center justify-content-center'>
                  <i className='bx fs-4 bx-camera'></i>
                </span>
              </div>
            </div>

            <form className='col-9 mb-5 pt-2  edit__info__wrapper'>
              <h2 className='edit__profile'>My profile</h2>
              <div>
                <label className='edit__label'>First Name</label><br/>
                <input onChange={(e) => setName(e.target.value)} value={name} className='mt-2 mb-2 edit__input' type="text" />
                <p className='edit__inpInfo'>Please enter your first name.</p>
              </div>

              <div>
                <label className='edit__label'>Last Name</label><br/>
                <input  onChange={(e) => setLastName(e.target.value)} value={lastName} className='mt-2 mb-2 edit__input' type="text" />
                <p className='edit__inpInfo'>Please enter your last name.</p>
              </div>
              
              <div className='d-flex justify-content-between'>
                <div className='col-5'>
                  <label className='edit__label'>Phone</label><br/>
                  <input onChange={(e) => setPhone(e.target.value)} value={phone} className='mt-2 mb-2 edit__input' type="text" />
                  <p className='edit__inpInfo'>Please enter your phone number.</p>
                </div>

                <div className='col-6'>
                  <label className='edit__label'>Email</label><br/>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} className='mt-2 mb-2 edit__input' type="text" />
                  <p className='edit__inpInfo'>Please enter your email address</p>
                </div>
              </div>
            </form>
          </div>

          <div className='d-flex justify-content-end'>
            <Link to='/UserDashboard'>
              <Button className='edit__btn' variant="contained">Save changes</Button>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
