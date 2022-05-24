import React from 'react'
import { Link } from 'react-router-dom'

export default function BookOutput({book,item}) {
  return (
    <Link to={`/BooksInfo/${book.bookId}`} key={item.id}>
      <li  className='book__item text-white'>
        <img className='mb-3 main-books-img' src={book.bookImg} alt="book1" width='164' height='250'/>
        <h3 className='book__title m-0'>{book.bookName}</h3>
        <p className='book__author mb-1'>{item.name} {item.lastName}</p>
        <div className='d-flex align-items-center book__info'>
          <i className='bx text-white fs-6 me-2 bxs-star'></i>
          <p className='m-0'>{book.bookRating} - 3400 ta fikrlar</p>
        </div>
      </li>
    </Link>
  )
}
