import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const navLinkStyles = ({ isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline',
    }
  }
  return (
    <nav>
        <NavLink style= {navLinkStyles} to ='/'>Home</NavLink>
        <NavLink style = {navLinkStyles} to ='/about'>About</NavLink>
    </nav>
  )
}
