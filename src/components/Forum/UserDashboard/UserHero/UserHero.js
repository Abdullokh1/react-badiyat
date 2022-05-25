import React from 'react'
import './UserHero.scss'
import userBgImg from '../../../../assets/img/user-hero-bg-img.png'
import Header from '../../../Header/Header'

export default function UserHero({name,lastName,phone,email,job}) {

  return (
    <>
    
    <section className='user-hero'>
      <div className='container'>
        <div className='user-hero__box d-flex'>
          <div className='user-hero__bg'>
            <img src={userBgImg} alt="userbgimg" height='320' />
          </div>
          <div className='user-hero__info'>
            <div className='user-hero-img'>
                <img className='user-hero-main-img' src="https://i.pinimg.com/550x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" width='167' height='166'/>
              <div className='user-hero__star__wrap'>
                <span className='user-hero__ornament d-flex align-items-center justify-content-center'>
                  <i className='bx bxs-star'></i>
                </span>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <h3 className='user-hero__name mb-3'>{name} {lastName}</h3>
            <p className='user-hero__data'>Telefon: <span className='user-hero__data--info ms-2'>{phone}</span></p>
            <p className='user-hero__data'>Email: <span className='user-hero__data--info ms-2'>{email}</span></p>

          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
