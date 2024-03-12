import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useSelector } from 'react-redux' 

function Navbar() {

    const Items = useSelector(state => state.Cart)  // aa state main application nu state che jena ander change thase te data avshe and useSelector ek subscription method ap che je na thi apne changes data male che. 

  return (
    <div className='FM'>
        <span className='Title'>REDUX STORE</span>
        <div>
           <Link to="/" className='Link'>Home</Link>
           <Link to="/cart" className='Link'>Cart</Link>
           <span className='Link col'>
              Cart Items:{Items.length}
           </span>
        </div>
    </div>
  )
}

export default Navbar