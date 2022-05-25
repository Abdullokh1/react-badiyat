import React from 'react'
import { NavLink } from 'react-router-dom'
import './HeaderNav.scss'

export default function HeaderNav() {
  const navItem = ['Bosh sahifa', 'Nasr', 'Nazm', 'Maqolalar', 'Forum']
  return (
    <nav>
      <ul className='m-0 nav d-flex list-unstyled'>
        {navItem.map((item, i) =>{
          return (
           <li key={i} className='nav__item'>
              {item === "Bosh sahifa" ? <NavLink to="/" className='nav__link' > 
               {item}
             </NavLink> : <NavLink to={`/${item}`} className='nav__link' > 
               {item}
             </NavLink>}
           </li>
          ) 
        })}
      </ul>

    </nav>
  )
}
