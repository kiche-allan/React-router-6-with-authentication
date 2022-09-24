import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeaturedProducts() {
    const navigate = useNavigate()
  return (
    <>
    <div>List of Featured Products</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusamus ducimus aspernatur hic quibusdam molestiae animi dignissimos quam ad fugit et in officia nisi sunt maiores facilis sed cum numquam.</p>
    <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}
