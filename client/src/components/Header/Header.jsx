import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"

import styles from "./Header.module.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState()
    return (
        <header>
            <nav className={styles.mainNav}>
         
            <div className={isOpen ? styles.mainNav__links + " " + styles.active : styles.mainNav__links}>

                <Link to={"/about"} className={styles.mainNav__link}>About</Link>
                <Link to={"/"} className={styles.mainNav__link}>Booking</Link>
                <Link to={"/team"} className={styles.mainNav__link}>Our team</Link>
                <Link to={"/contact"} className={styles.mainNav__link}>Contact</Link>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={styles.burger}><GiHamburgerMenu/></button>
            </nav>
           
        </header>
    );
};

export default Header;