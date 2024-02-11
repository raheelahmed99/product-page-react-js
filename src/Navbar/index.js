import React from 'react'
import styles from './style.module.css'
import logo from '../Assets/Images/brand_logo.png';

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
    <div className='logo'>
        <img src={logo} alt='logo'/>
    </div>
    <nav>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <button className={styles.loginbtn}>Login</button>
    </div>
    </>
  )
}

export default Navbar;
