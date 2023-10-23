import React from 'react';
import styles from './Team.module.css';
import illia from "../../assets/team/illia.jpg"
import vlada from "../../assets/team/vlada.jpg"
import yura from "../../assets/team/yura.jpg"
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
                            <h2>Jane Doe</h2>
                            <p className={styles.title}>CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={yura} alt="Mike" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>Mike Ross</h2>
                            <p className={styles.title}>Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src={vlada} alt="John" style={{ width: '100%' }} />
                        <div className={styles.container}>
                            <h2>John Doe</h2>
                            <p className={styles.title}>Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;