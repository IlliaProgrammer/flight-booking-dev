import React from 'react';
import styles from './Team.module.css';
import illia from "../../assets/team/illia.jpg"
import vlada from "../../assets/team/vlada.jpg"
import yura from "../../assets/team/yura.jpg"
import danila from "../../assets/team/danila.jpg"
import timur from "../../assets/team/timur.jpg"
import yulia from "../../assets/team/yulia.jpg"
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const Team = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <h2 className={styles.aboutSection}>Our Team</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={illia} alt="Jane" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Illia Fialkivskyi</h2>
                            <p className={styles.title}>CEO & Software Engineer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>illia@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={yura} alt="Mike" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Yura Yakovenko</h2>
                            <p className={styles.title}>DevOps</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>yura@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={vlada} alt="John" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Vlada Tishkevich</h2>
                            <p className={styles.title}>Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>vlada@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={danila} alt="Jane" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Zibnytskyi Danila</h2>
                            <p className={styles.title}>Documentation</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>illia@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={yulia} alt="Mike" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Yulia Litvin</h2>
                            <p className={styles.title}>GA Tooling</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>yulia@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={timur} alt="John" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Timur Rozmetov</h2>
                            <p className={styles.title}>SEO Developer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>timur@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;