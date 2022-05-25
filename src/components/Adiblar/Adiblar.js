import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { users } from '../../Data/Data'
import Header from '../Header/Header'
import './Adiblar.scss'

export default function Adiblar() {
  let location = useLocation()


  return (
    <>
    <Header/>
    
    <div className='container'>
      {users.map((item) =>{
        if(item.id === location.pathname.split("/").at(-1)){
          return (
            <li className='m-0 p-0' key={item.id}>
              <div className='d-flex'>
                <div className='user-img-part'>
                  <img className='user-img' src={item.img} alt="user-img" width='590' height='780' />
                  <div className='d-flex user-info-wrapper align-items-center'>
                    <div className='me-4'>
                      <p className='user-date-birth mb-2'>Tavallud sanasi</p>
                      <p className='user-year mb-0'>{item.bornDate} {item.bornMonth} {item.born}</p>
                      <p className='user-location'>{item.location}</p>
                    </div>
                    <span className='user-line'></span>
                    <div className='ms-4'>
                      <p className='user-date-birth mb-2'>Vafot etgan sanasi</p>
                      <p className='user-year mb-0'>{item.diedDate} {item.diedMonth} {item.died}</p>
                      <p className='user-location'>{item.location}</p>

                    </div>
                  </div>
                </div>

                <div>
                  <h1 className='user-name'>{item.name} {item.lastName}</h1>
                  <p className='user-desc mb-4'>{item.desc}</p>
                  <p className='user-job'><i className='bx user-job me-2 bxs-bookmark'></i>Ijodi</p>
                  <p className='user-job-desc mb-5'>{item.jobs}</p>
                  <div className='d-flex mb-3 align-items-center justify-content-between'>
                    <h3 className='user-job fs-4'>Asarlari</h3>
                    <button className='user-more-btn'>Barchasini ko’rish</button>
                  </div>

                  <ul className='m-0 user-book-list p-0 d-flex list-unstyled'>
                    
                    {item.bookObj.map(item =>{
                      return (
                        <Link to={`/BooksInfo/${item.bookId}`}>
                          <li key={item.bookId}>
                            <img className='user-book-img' src={item.bookImg} alt="book1" width='164' height='250' />
                            <p className='book-name mt-3 mb-1'>{item.bookName}</p>
                            <p className='book-ratings'><i className='bx me-2 text-white bxs-star'></i>{item.bookRating} - 3400 ta fikrlar</p>
                          </li>
                        </Link>
                      )
                    })}

                  </ul>
                </div>
              </div>
               
            </li>
          )
        }
      })}
    </div>
    
    </>
  )
}
