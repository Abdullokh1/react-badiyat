import React, { useEffect, useState } from 'react'
import { users } from '../../Data/Data'
import Pagination from '../Cards/Pagination/Pagination'
import Header from '../Header/Header'
import Hero from '../Main/Hero'
import Books from './Books/Books'
import './Nasr.scss'
import SearchBook from './SearchBook/SearchBook'

export default function Nasr() {

  let [arr, setArr] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postPage, setPostPage] = useState(12);

  useEffect(() => {
    setArr(users)
  }, []);

  let indexOfLastPage = currentPage * postPage
  let indexOfFirstPage = indexOfLastPage - postPage;
  let currentPosts = arr.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div>
      <Header/>
      <Hero/>
      <SearchBook setData={setArr}/>
      
      <div className='container'>
        <Books
        setData={setArr}
        users={users}
        arr={currentPosts}
        />

      <Pagination
        postPage={postPage}
        totalPosts={arr.length}
        paginate={paginate}
      />

      </div>
      
    </div>
  )
}








