import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  return (
    <>
    <div><h1>Homepage</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima minus ad quae recusandae blanditiis labore nobis porro, dolore iusto ducimus veritatis, corporis ullam inventore laborum totam animi perspiciatis facilis eius odit ea? Unde impedit dolorum deleniti? Perspiciatis natus ea quia asperiores eveniet doloremque, consequatur sapiente accusamus neque aperiam earum.</p>
    <button onClick={() => navigate('order-summary')}>Place Order</button>
    </div>

    </>
  )
}
