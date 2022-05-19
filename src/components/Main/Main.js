import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import { obj } from '../Cards/Users/Data/Data'
import Search from '../Hero/Search/Search';

export default function Main() {
  let [data, setData] = useState(obj);

  return (
    <>
      <Search setData={setData}/>
     <Cards
      setData={setData}
      obj={obj}
      data={data}
     />
    </>
  )
}
