import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <>
    <div>
        <input type="search" placeholder='Search Products' />
    </div>

    <nav>
        <Link to = '/products/featured'>Featured</Link>
        <Link to ='/products/new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
