import React, { useState } from 'react'
import { users } from '../../Data/Data'
import Hero from '../Main/Hero'
import Books from './Books/Books'
import './Nasr.scss'
import SearchBook from './SearchBook/SearchBook'

export default function Nasr() {
  let [data, setData] = useState(users)


  return (
    <div>
      <Hero/>
      <SearchBook setData={setData}/>
      
      <div className='container'>
        <Books
        setData={setData}
        data={data}
        obj={users}
        />

      </div>
      
    </div>
  )
}








