import React from 'react'
import {Route, Routes} from "react-router-dom"
import Product from '../Pages/Product'
import LoginPage from '../Pages/Login'
import SignupPage from '../Pages/Signup'
import DashBoard from '../Pages/DashBoard'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Product/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/singnup' element={<SignupPage/>}></Route>
      <Route path='/dashboard' element={<PrivateRoute><DashBoard/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default Allroutes