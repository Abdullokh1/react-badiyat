import React, { useState } from 'react'
import './Users.scss'


export default function Users({item}) {
  return (
    <>
      <li className='category__data'>
        <img src={item.img} alt="userimg" width='180'/>
        <div className='p-3'>
          <h4 className='category__name'>{item.name}</h4>
          <p className='category__year'>{item.year}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <i className='bx category__icon bxs-book-alt' ></i>
              <span className='category__media'>{item.books}</span>
            </div>
            <div className='d-flex align-items-center'>
              <i className='bx category__icon bx-headphone' ></i>
              <span className='category__media'>{item.audios}</span>
            </div>
          </div>
        </div>
            <p className='category__type'>{item.type}</p>
      </li>
    </>
  )
}
