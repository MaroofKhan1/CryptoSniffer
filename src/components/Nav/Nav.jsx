import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './Nav.css'

const Nav = () => {
    return (
      <div>
        <div className='navbar' >
          <FaCoins className='icon' />
          <h1><span className='colors'></span></h1>
        </div>
      </div>
    )
  }
export default Nav