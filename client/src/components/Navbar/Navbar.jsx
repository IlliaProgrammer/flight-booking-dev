import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <span className={styles.logo}>sometitle</span> 
        <div className={styles.navItems}>
          <button className={styles.navButton}>Register</button> 
          <button className={styles.navButton}>Login</button> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;