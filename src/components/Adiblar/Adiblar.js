import React from 'react'
import { useLocation } from 'react-router-dom'
import { obj } from '../Cards/Users/Data/Data';
import './Adiblar.scss'

export default function Adiblar() {
  let location = useLocation()

  
  return (
    
    
    <div className='container'>
      {obj.map((item,i) =>{
        if(item.id === Number(location.pathname.split("/").at(-1))){
          return (
            <li className='m-0 p-0' key={i}>
              <div className='d-flex'>
                <div className='user-img-part'>
                  <img className='user-img' src={item.img} alt="user-img" width='590' height='780' />
                  <div className='d-flex user-info-wrapper align-items-center'>
                    <div className='me-4'>
                      <p className='user-date-birth mb-2'>Tavallud sanasi</p>
                      <p className='user-year'>{item.year}</p>
                    </div>
                    <span className='user-line'></span>
                    <div className='ms-4'>
                      <p className='user-date-birth mb-2'>Tavallud sanasi</p>
                      <p className='user-year'>{item.year}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className='user-name'>{item.name}</h1>
                  <p className='user-desc'>{item.desc}</p>
                </div>

              </div>
               
            </li>
          )
        }
      })}
    </div>
  )
}
