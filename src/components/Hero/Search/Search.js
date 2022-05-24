import React from 'react'
import { users } from '../../../Data/Data'
import './Search.scss'

export default function Search({setData}) {
  let arr = []
  const searchHanlder = (e) =>{
    {users.map(item =>{
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
