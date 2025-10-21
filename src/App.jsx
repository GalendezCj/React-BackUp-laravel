import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { Home } from './Components/FrontendDesigns/Home';
import { About } from './Components/FrontendDesigns/About';
import { Cart } from './Components/FrontendDesigns/Cart';
import { Login } from './Components/backend/Login';
import { Dashboard } from './Components/backend/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import './assets/css/style.scss'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/admin/login' element={<Login/>}></Route>
      <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
     

      </Routes>
    </BrowserRouter>
    <ToastContainer 
      position='top-center'
    />
    </>
  )
}

export default App
