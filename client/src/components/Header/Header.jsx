import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css"

const Header = () => {
    return (
        <div>
            <nav className={styles.mainNav}>
         
            <div className={styles.mainNav__links}>
                <Link to={"/about"} className={styles.mainNav__link}>About</Link>
                <Link to={"/"} className={styles.mainNav__link}>Booking</Link>
            </div>
           
            </nav>
        </div>
    );
};

export default Header;