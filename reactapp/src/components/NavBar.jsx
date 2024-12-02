import React from 'react'
import {BsCartFill} from 'react-icons/bs'
const NavBar = ({cartNum}) => {
  return (
    <div className='navBar'>
        <a href="">My Store</a>
        <div className='cart-items'>
            <BsCartFill></BsCartFill>
            <p className='cart-num'>{cartNum}</p>
        </div>
    </div>
  )
}

export default NavBar