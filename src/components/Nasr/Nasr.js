import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {books} from '../BooksData/BooksData'
import Hero from '../Main/Hero'
import Books from './Books/Books'
import './Nasr.scss'
import SearchBook from './SearchBook/SearchBook'

export default function Nasr() {
  let [data, setData] = useState(books);

  return (
    <>
    <Hero/>
    <SearchBook
    setData={setData}
    
    />

     <div className='container'>
       <Books
       data={data}
       setData={setData}
       />
   
     <ul className='m-0 pb-5 book-list book d-flex justify-content-center flex-wrap p-0'>
       {data.map(item =>{
         return (
           <Link key={item.id} to={`/BooksInfo/${item.id}`}>
            <li  className='book__item text-white'>
              <img className='mb-3' src={item.img} alt="book1"/>
              <h3 className='book__title m-0'>{item.bookTitle}</h3>
              <p className='book__author mb-1'>{item.bookAuthor}</p>
              <div className='d-flex align-items-center book__info'>
                <i className='bx text-white fs-6 me-2 bxs-star'></i>
                <p className='m-0'>{item.rating} - {item.comments} ta fikrlar</p>
              </div>
            </li>
           </Link>
         )
       })}
     </ul>
     </div>
    </>
  )
}








