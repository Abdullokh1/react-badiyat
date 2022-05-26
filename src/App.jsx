import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Adiblar from './components/Adiblar/Adiblar';
import BooksInfo from './components/BooksInfo/BooksInfo';
import Edit from './components/Edit/Edit';
import Forum from './components/Forum/Forum';
import UserDashboard from './components/Forum/UserDashboard/UserDashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import Nazm from './components/Nazm/Nazm';
import NoPage from './components/NoPage/NoPage';
import SignIn from './components/SignIn/SignIn';
import Wishlist from './components/Wishlist/Wishlist'
import { users } from './Data/Data';


function App() {
  
  let [name, setName] = useState('')
  let [lastName, setLastName] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')

  
  return (
    <>
   
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='Nasr' element={<Nasr/>}/>
       <Route path='Nazm' element={<Nazm/>}/>
       <Route path='Maqolalar' element={<Maqolalar/>}/>
       <Route path='Forum' element={<Forum
       name={name}
       setName={setName}
       lastName={lastName}
       setLastName={setLastName}
       phone={phone}
       setPhone={setPhone}
       email={email}
       setEmail={setEmail}
       />}/>
       <Route path='SignIn' element={<SignIn/>}/>
       <Route path='UserDashboard' element={<UserDashboard
       name={name}
       lastName={lastName}
       phone={phone}
       email={email}
       />}/>
       <Route path='Adiblar/:id' element={<Adiblar/>}/>
       <Route path='BooksInfo/:id' element={<BooksInfo/>}/>
       <Route path='Wishlist' element={<Wishlist/>}/>
       <Route path='Edit' element={<Edit
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
       />}/>

       <Route path='*' element={<NoPage/>}/>
    </Routes>

    </>

  );
}

export default App;
