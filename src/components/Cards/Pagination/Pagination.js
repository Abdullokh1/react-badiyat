import React from 'react'
import './Pagination.scss'

export default function Pagination({postPage, totalPosts, paginate}) {
  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postPage); i++){
    pageNumber.push(i);
  }
  return (
    <>
     <nav className='container d-flex justify-content-center mb-5'>
      <ul className='pagination'>
        {pageNumber.map(number => {
          return <li className='page-item' key={number}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        })}
      </ul>
    </nav>

    
    </>
     
  )
}
