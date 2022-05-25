import React, { useEffect, useState } from 'react'
import { users } from '../../Data/Data';
import Cards from '../Cards/Cards'
import Pagination from '../Cards/Pagination/Pagination';
import Search from '../Hero/Search/Search';



export default function Main() {

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
    <>
      <Search setData={setArr}/>

     <Cards
      setData={setArr}
      users={users}
      arr={currentPosts}
     />

     
     <Pagination
      postPage={postPage}
      totalPosts={arr.length}
      paginate={paginate}
     />
    </>
  )
}
