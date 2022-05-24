import React from 'react'
import BookFilterBtns from '../BookFilterBtns/BookFilterBtns'
import BookOutput from '../BookOutput/BookOutput'


export default function Books({setData, data, obj}) {
  const filterBtns = ['All', "O'zbek", 'Jahon', 'Diniy']

  return (
      <div className="category__info">
        <h3 className="category__title mb-3">Asosiy kategoriyalar</h3>
        <ul className=" category__filter__list p-0 d-flex justify-content-center list-unstyled">
          {filterBtns.map((item, i) =>{
            return <BookFilterBtns
            data={item}
            setData={setData} 
            obj={obj}
            key={i}
            />
          })}
        </ul>

         <ul className='m-0 pb-5 book-list book d-flex justify-content-center flex-wrap p-0'>
          {data.map((item, index) =>{
            return item.bookObj.map((book, index) =>{
            return  <BookOutput
              book={book}
              item={item}
              key={item.id}
              />
            })
          })}
        </ul> 
      </div> 
  )
}
