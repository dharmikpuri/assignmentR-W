import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around",padding:"30px"}}>
      <Link to={"/"}>Product Page</Link>
      <Link to={"/login"}>Login Page</Link>
      <Link to={"/singnup"}>SignUp Page</Link>
      <Link to={"/dashboard"}>DashBoard Page</Link>


    </div>
  )
}

export default Navbar