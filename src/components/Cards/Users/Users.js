import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Users.scss'


export default function Users({item}) {
  return (
    <Link to={`Adiblar/${item.id}`}>
      <li className='category__data'>
        <img className='users-img-data' src={item.img} alt="userimg" width='175' height='150'/>
        <div className='p-3'>
          <h4 className='category__name'>{item.name} {item.lastName}</h4>
          <p className='category__year'>{item.born}-{item.died}</p>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <i className='bx category__icon bxs-book-alt' ></i>
              <span className='category__media'>{item.books}</span>
            </div>
            <div className='d-flex align-items-center'>
              <i className='bx category__icon bx-headphone' ></i>
              <span className='category__media'>{item.audio}</span>
            </div>
          </div>
        </div>
            <p className='category__type'>{item.type}</p>
      </li>
    </Link>
  )
}
