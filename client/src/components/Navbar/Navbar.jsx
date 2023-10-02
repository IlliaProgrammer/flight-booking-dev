import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
      <Link to={"/"} className={styles.mainNav__logo}><span><Typewriter
                options={{
                    strings: [' SkyWings.Express'],
                    autoStart: true,
                    loop: true,
                }}
        /></span></Link>
        <div className={styles.navItems}>
          <button className={styles.navButton}>Register</button> 
          <button className={styles.navButton}>Login</button> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;