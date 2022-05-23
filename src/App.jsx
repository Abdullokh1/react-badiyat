
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Adiblar from './components/Adiblar/Adiblar';
import BooksInfo from './components/BooksInfo/BooksInfo';
import Forum from './components/Forum/Forum';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import Nazm from './components/Nazm/Nazm';
import NoPage from './components/NoPage/NoPage';
import SignIn from './components/SignIn/SignIn';



function App() {
  
  return (
    <>
    
    <Header/>

    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='Nasr' element={<Nasr/>}/>
       <Route path='Nazm' element={<Nazm/>}/>
       <Route path='Maqolalar' element={<Maqolalar/>}/>
       <Route path='Forum' element={<Forum/>}/>
       <Route path='SignIn' element={<SignIn/>}/>
       <Route path='Adiblar/:id' element={<Adiblar/>}/>
       <Route path='BooksInfo/:id' element={<BooksInfo/>}/>

       <Route path='*' element={<NoPage/>}/>
    </Routes>
    </>

  );
}

export default App;
