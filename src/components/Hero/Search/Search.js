import React from 'react'
import './Search.scss'
import { obj } from '../../Cards/Users/Data/Data'

export default function Search({setData}) {
  let arr = []
  const searchHanlder = (e) =>{
    {obj.map(item =>{
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
        arr.push(item)
       }
    })}
    setData(arr)
  }

  return (
    <div className='hero__search'>
      <h3 className='hero__search--title'>Qidirish</h3>
      <form>
        <input onChange={searchHanlder} className='hero__search--input'
         placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
         type="text"
        />

        <button className='hero__search--btn'>
        <i className='bx bx-search-alt' ></i>
          Izlash
        </button>
      </form>
    </div>
  )
}
