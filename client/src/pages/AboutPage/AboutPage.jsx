import React from 'react';
import styles from "./AboutPage.module.css"
import arrow from "../../assets/Long_arrow.svg"
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const AboutPage = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            
            <div className={styles.wrapper}>
            
            <div className={styles.top}>
                <p className={styles.our}>our</p>
                <p className={styles.values}>Values</p>
                <h1 className={styles.values}>Travel abroad</h1>
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.row}>
                <div className={styles.text}>Our first principal is honesty, which helps us meet the expectations we create.</div>
                <img src={arrow} className={styles.left} alt="" />
                <img src={arrow} className={styles.right} alt="" />
                <div className={styles.hex}>INtegrity</div>
            </div>
            <div className={styles.row2}>
                <div className={styles.hex}>Commitment</div>
                <img src={arrow} className={styles.left} alt="" />
                <img src={arrow} className={styles.right} alt="" />
                <div className={styles.text}>Our commitment to our work and our clients is an unbreakable bond.</div>
            </div>
            <div className={styles.row}>
                <div className={styles.text}>Our team is always learning something new to get better at what they do.</div>
                <img src={arrow} className={styles.left} alt="" />
                <img src={arrow} className={styles.right} alt="" />
                <div className={styles.hex}>Learning</div>
            </div>
            <div className={styles.row2}>
                <div className={styles.hex}>Passion</div>
                <img src={arrow} className={styles.left} alt="" />
                <img src={arrow} className={styles.right} alt="" />
                <div className={styles.text}>Passion drives us to perform better, progress continually and deliver timely.</div>
            </div>
        </div>
        </>
        
    );
};

export default AboutPage;