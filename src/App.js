import { Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import AjoutSneakers from './containers/AjoutSneakers'
import Catalogue from './containers/Catalogue'
import Product from './containers/Product'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
      <Route path = '/AjoutSneakers' element = {<AjoutSneakers/>}/>
      <Route path = '/Catalogue' element = {<Catalogue/>}/>
      <Route path = '/Product' element = {<Product/>}/>
    </Routes> 
  );
}

export default App;
