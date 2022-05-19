import React from 'react'
import './CategoryBtns.scss'

export default function CategoryBtns({setData, obj, data}) {

  const filterHandler = (e) =>{
    let btnValue = e.target.textContent
   
    if(btnValue === 'Temuriylar davri'){
      setData(obj.filter(item =>{
        return item.type === 'Temuriylar davri';
      }))
    }
    else if(btnValue === 'Jadid adabiyoti'){
      setData(obj.filter(item =>{
        return item.type === 'Jadid adabiyoti';
      }))
    }
    else if(btnValue === 'Sovet davri'){
      setData(obj.filter(item =>{
        return item.type === 'Sovet davri';
      }))
    }
    else if(btnValue === 'Mustaqillik davri'){
      setData(obj.filter(item =>{
        return item.type === 'Mustaqillik davri';
      }))
    }
  }
 
  return (
    <>
      <li className='category__item'>
        <button onClick={filterHandler} className='category__filter__btn'>{data}</button>
      </li>
    </>
  )
}
