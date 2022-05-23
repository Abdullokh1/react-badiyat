import React from 'react'
import { books } from '../../BooksData/BooksData'


export default function BookFilterBtns({setData, item}) {
  const filterHandler = (e) =>{
    let btnValue = e.target.textContent
   
    if(btnValue === 'Tarixiy'){
      setData(books.filter(item =>{
        return item.genre === 'Tarixiy';
      }))
    }
    else if(btnValue === 'Badiiy'){
      setData(books.filter(item =>{
        return item.genre === 'Badiiy';
      }))
    }
    else if(btnValue === 'Diniy'){
      setData(books.filter(item =>{
        return item.genre === 'Diniy';
      }))
    }
    else if(btnValue === 'Drama'){
      setData(books.filter(item =>{
        return item.genre === 'Drama';
      }))
    }
  }
  return (

    <li className='category__item'>
      <button onClick={filterHandler} className='category__filter__btn'>{item}</button>
    </li>
  )
}
