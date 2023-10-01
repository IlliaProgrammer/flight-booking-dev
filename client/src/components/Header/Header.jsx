import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css"
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <div>
            <nav className={styles.mainNav}>
            <Link to={"/"} className={styles.mainNav__logo}><span><Typewriter
                options={{
                    strings: [' SkyWings.Express'],
                    autoStart: true,
                    loop: true,
                }}
                /></span></Link>
            <div className={styles.mainNav__links}>
                <Link to={"/about"} className={styles.mainNav__link}>About</Link>
                <Link to={"/"} className={styles.mainNav__link}>Booking</Link>
            </div>
           
            </nav>
        </div>
    );
};

export default Header;