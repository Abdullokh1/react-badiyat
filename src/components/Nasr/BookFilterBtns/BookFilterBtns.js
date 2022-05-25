import React from 'react'


export default function BookFilterBtns({setData, users, data}) {



  const filterHandler = (e) =>{
    let btnValue = e.target.textContent
   
    if(btnValue === 'All'){
      setData(users.map(item =>{
        return item
      }))
    }
     if(btnValue === "O'zbek"){
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

    <li className='category__item'>
      <button onClick={filterHandler} className='category__filter__btn'>{data}</button>
    </li>
  )
}
