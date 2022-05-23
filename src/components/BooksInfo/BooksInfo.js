import { Button } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { books } from '../BooksData/BooksData'
import './BooksInfo.scss'


export default function BooksInfo() {
  let location = useLocation()
  return (
    <>
    <div className='container'>
      {books.map(item =>{
        if(item.id === Number(location.pathname.split('/').at(-1))){
          return (
            <li key={item.id}  className='book__item book__inner__item text-white'>
              <div className='d-flex aling-items-center'>
                <div className='book__img__wrapper'>
                  <img className='mb-3' src={item.img} alt="book1" width='500'/>
                </div>
                <div>
                  <h3 className='book__title book__inner__title'>{item.bookTitle}</h3>
                  <div className='d-flex align-items-center'>
                    <p className='book__author book__inner__author m-0 me-3'>{item.bookAuthor}</p>
                    <span>
                      <i className='bx text-white fs-6 me-2 bxs-star'></i>
                      {item.rating}
                    </span>
                  </div>
                  <p className='book__desc mt-4'>
                    Sahifalar soni: <span className='text-white ms-2'>{item.pages}</span> 
                  </p>    
                  <p className='book__desc mt-4'>
                    Chop etilgan: <span className='text-white ms-2'>{item.year}</span> 
                  </p>  
                  <p className='book__desc mt-4 mb-5'>
                    Janri: <span className='text-white ms-2'>{item.genre}</span> 
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
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>


                  <h3 className='mt-5 book__format mb-5'>Mavjud formatlar</h3>
                  <ul className='d-flex mb-5  book__limit__list list-unstyled'>
                    <li className='text-center book__price me-5'>
                      <i className='bx category__icon bxs-book-alt' ></i>
                      <p className='mb-2'>Qog'oz kitob</p>
                      <span>{item.price} so'm</span>
                    </li>

                    <li className='text-center book__price me-5'>
                      <i className='bx category__icon bx-headphone' ></i>
                      <p className='mb-2'>Audiokitob</p>
                      <span>{item.time} soat</span>
                    </li>

                    <li className='text-center book__price'>
                      <i className='bx category__icon bx-mobile-alt'></i>
                      <p className='mb-2'>Elektron</p>
                      <span>pdf, epub</span>
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
      })}
    </div>
    </>
  )
}
