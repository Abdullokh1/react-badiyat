import React from 'react'
import './Header.scss'
import mainLogo from '../../assets/img/main-logo.svg'
import HeaderNav from './HeaderNav/HeaderNav'
import userAvatar from '../../assets/img/user-avatar.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <a href="#"><img src={mainLogo} alt="main-logo" width='96' height='36' /></a>
          </div>
          <div className='d-flex align-items-center'>
            <div className='header__nav__wrapper'>
              <HeaderNav/>
            </div>
            <button className='d-flex align-items-center'>
              <img className='header__avatar me-1' src={userAvatar} alt="userAvatar" />
              <i className='bx bx-chevron-down'></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

window.onscroll = function() {
  if (window.scrollY >= 100 || window.pageYOffset >= 100) {
    document.getElementsByTagName("header")[0].classList.add('color-change');
  } else {
    document.getElementsByTagName("header")[0].classList.remove('color-change');
  }
};