import React from 'react'
import Product from '../components/Product'

function Home() {
  return (
    <div>
      <h3 className='col fs'>Welcome to the Redux Toolkit Store</h3>

     <section>
        <h3 className='productTitle'>Products</h3>   
        <Product/>
     </section> 

    </div>
  )
}

export default Home
