import React, { useState } from 'react'
import { users } from '../../Data/Data';
import Cards from '../Cards/Cards'
import Search from '../Hero/Search/Search';

console.log(users);

export default function Main() {
  let [data, setData] = useState(users);

  return (
    <>
      <Search setData={setData}/>
     <Cards
      setData={setData}
      obj={users}
      data={data}
     />
    </>
  )
}
