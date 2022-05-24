import React from 'react'


export default function BookFilterBtns({setData, obj, data}) {



  const filterHandler = (e) =>{
    let btnValue = e.target.textContent
   
    if(btnValue === 'All'){
      setData(obj.map(item =>{
        return item
      }))
    }
     if(btnValue === "O'zbek"){
      setData(obj.filter(item =>{
        return item.genre === 'uzbek';
      }))
    }
    else if(btnValue === 'Jahon'){
      setData(obj.filter(item =>{
        return item.genre === 'jahon';
      }))
    }
    else if(btnValue === 'Diniy'){
      setData(obj.filter(item =>{
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
