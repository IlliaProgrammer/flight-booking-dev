import React from 'react';
import styles from './Navbar.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {
  const {user} = useContext(AuthContext)
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
      {user ?  
        <div className={styles.navItems}>
          {user.username}
          <button className={styles.navButton}>Logout</button> 
        </div> 
        :
        <div className={styles.navItems}>
          <button className={styles.navButton}>Register</button> 
          <Link to={"/login"}><button className={styles.navButton}>Login</button> </Link>
          
        </div>
      }
      </div>
    </div>
  );
};

export default Navbar;