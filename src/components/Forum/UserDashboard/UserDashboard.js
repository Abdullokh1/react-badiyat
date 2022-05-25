import React from 'react'
import Header from '../../Header/Header'
import UserHero from './UserHero/UserHero'

export default function UserDashboard({
  name,
  lastName,
  phone,
  email,
  job
}) {
  return (
    <>
    
    <Header/>
    <UserHero
    name={name}
    lastName={lastName}
    phone={phone}
    email={email}
    job={job}
    />

    </>
  )
}
