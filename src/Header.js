import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='center'>
        <input className='arama' type='text' placeholder='Add task'></input> 
        &nbsp; &nbsp;
        <button className='arama_button'>Add</button>
    </div>
  )
}

export default Header;