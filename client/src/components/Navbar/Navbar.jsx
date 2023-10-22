import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom'; // Import useHistory
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);


  const logout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      dispatch({ type: "LOGOUT", payload: err.response.data });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to={"/"} className={styles.mainNav__logo}>
          <span>
            <Typewriter
              options={{
                strings: [' SkyWings.Express'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Link>
        {user ? (
          <div className={styles.navItems}>
            {user.username}
            <button className={styles.navButton} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.navItems}>
            <button className={styles.navButton}>Register</button>
            <Link to={"/login"}>
              <button className={styles.navButton}>Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;