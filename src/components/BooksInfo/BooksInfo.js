import { Button } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { users } from '../../Data/Data';
import Header from '../Header/Header';
import './BooksInfo.scss'


export default function BooksInfo() {
  let location = useLocation()
  return (
    <>
    <Header/>

    <div className='container'>
      {users.map(item =>{
       return item.bookObj.map(book =>{
          if(book.bookId === location.pathname.split('/').at(-1)){
            return (  
              <li key={book.bookId}  className='book__item book__inner__item text-white'>
                <div className='d-flex aling-items-center'>
                  <div className='book__img__wrapper'>
                    <img className='mb-3 book-data-main-img' src={book.bookImg} alt="book1" width='500'/>
                  </div>
                  <div>
                    <h3 className='book__title book__inner__title'>{book.bookName}</h3>
                    <div className='d-flex align-items-center'>
                      <Link to={`/Adiblar/${item.id}`}>
                        <p className='book__author book__inner__author m-0 me-3'>{item.name} {item.lastName}</p>
                      </Link>
                      <span>
                        <i className='bx text-white fs-6 me-2 bxs-star'></i>
                        {book.bookRating}
                      </span>
                    </div>
                    <p className='book__desc mt-4'>
                      Sahifalar soni: <span className='text-white ms-2'>{book.bookPage}</span> 
                    </p>    
                    <p className='book__desc mt-4'>
                      Chop etilgan: <span className='text-white ms-2'>{book.published}</span> 
                    </p>  
                    <p className='book__desc mt-4 mb-5'>
                      Janri: <span className='text-white ms-2'>{book.bookSenario}</span> 
                    </p>    
    
    
                    <div className="accordion p-0 m-0" id="accordionExample">
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button p-0 book__button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          To'liq malumot
                          <i className="bx fs-5 text-white ms-2 bx-down-arrow-alt" />
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body pb-3 ps-0">
                          {book.bookInfo}
                        </div>
                         <p className='accordion-body m-0 p-0'>{book.bookInfoTwo}</p>
                      </div>
                    </div>
                  </div>
    
    
                    <h3 className='mt-5 book__format mb-5'>Mavjud formatlar</h3>
                    <ul className='d-flex mb-5  book__limit__list list-unstyled'>
                      <li className='text-center book__price me-5'>
                        <i className='bx category__icon bxs-book-alt' ></i>
                        <p className='mb-2'>Qog'oz kitob</p>
                        <span className='price-info'>{book.bookPrice}</span>
                      </li>
    
                      <li className='text-center book__price me-5'>
                        <i className='bx category__icon bx-headphone' ></i>
                        <p className='mb-2'>Audiokitob</p>
                        <span className='price-info'>{book.audioTime} soat</span>
                      </li>
    
                      <li className='text-center book__price'>
                        <i className='bx category__icon bx-mobile-alt'></i>
                        <p className='mb-2'>Elektron</p>
                        <span className='price-info'>{book.electron}</span>
                      </li>
    
                      <li>
                        <Button variant="contained" className='book__add__btn'>Javonga qo’shish </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            )
          }
      })
      })}
    </div>
    </>
  )
}
