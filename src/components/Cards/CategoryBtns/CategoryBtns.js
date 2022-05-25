import React from 'react'
import './CategoryBtns.scss'

export default function CategoryBtns({setData, users, item}) {

  const filterHandler = (e) =>{
    let btnValue = e.target.textContent
   
    if(btnValue === 'All'){
      setData(users)
    }
    else if(btnValue === "O'zbek"){
      setData(users.filter(item =>{
        return item.genre === 'uzbek';
      }))
    }
    else if(btnValue === 'Jahon'){
      setData(users.filter(item =>{
        return item.genre === 'jahon';
      }))
    }
    else if(btnValue === 'Diniy'){
      setData(users.filter(item =>{
        return item.genre === 'Diniy';
      }))
    }
  }
 
  return (
    <>
      <li className='category__item'>
        <button onClick={filterHandler} className='category__filter__btn'>{item}</button>
      </li>
    </>
  )
}
