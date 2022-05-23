import React from 'react'
import BookFilterBtns from '../BookFilterBtns/BookFilterBtns'

export default function Books({setData, data}) {
  const filterBtns = ['Tarixiy', 'Badiiy', 'Diniy', 'Drama']

  return (
      <div className="category__info">
        <h3 className="category__title mb-3">Asosiy kategoriyalar</h3>
        <ul className=" category__filter__list p-0 d-flex justify-content-center list-unstyled">
          {filterBtns.map((item, i) =>{
            return <BookFilterBtns
            item={item}
            setData={setData} 
            key={i}
            />
          })}
        </ul>
      </div> 
  )
}
