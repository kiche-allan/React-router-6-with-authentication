import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const {userId} = useParams()
  return (
    <div>
        <h1>Details about user {userId}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, obcaecati! Recusandae, aliquam nemo doloremque libero nam quis dicta magnam fugit sint natus cupiditate! Dolores maiores perspiciatis quis nisi! Quisquam, ipsa.</p>
        </div>
  )
}
