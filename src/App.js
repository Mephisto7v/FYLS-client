import { Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import AjoutSneakers from './containers/AjoutSneakers'
import AjoutUtilisateur from './containers/AjoutUtilisateur'
import Catalogue from './containers/Catalogue'
import Product from './containers/Product'
import Cart from './containers/Cart'
import Thanks from './containers/Thanks'
import InfoUtilisateurs from './containers/InfoUtilisateurs'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/register' element = {<Register/>}/>
      <Route path = '/AjoutSneakers' element = {<AjoutSneakers/>}/>
      <Route path = '/AjoutUtilisateur' element = {<AjoutUtilisateur/>}/>
      <Route path = '/InfoUtilisateurs' element = {<InfoUtilisateurs/>}/>
      <Route path = '/Catalogue' element = {<Catalogue/>}/>
      <Route path = '/Product' element = {<Product/>}/>
      <Route path = '/Cart' element = {<Cart/>}/>
      <Route path = '/Thanks' element = {<Thanks/>}/>
    </Routes> 
  );
}

export default App;
