import React from 'react';
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <header className={styles.mainHeading}>
                <div className={styles.mainHeading__content}>
            <article className={styles.mainHeading__text}>
                <p className={styles.mainHeading__preTitle}>flights</p>
                <h2 className={styles.mainHeading__title}>under the sky</h2>
                <p className={styles.mainHeading__description}>
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                </p>
                <button className={styles.cta}>know more</button>
            </article>

            <figure className={styles.mainHeading__image}>
                <img
                    src="https://gray-wmctv-prod.cdn.arcpublishing.com/resizer/7D7dKUjwlxnA24CB_Jr80I6t0L0=/1200x1200/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/5V62QS6ZHNF6DBA7656F3RS4UY.jpg"
                    alt=""
                />
            </figure>
        </div>
        </header>
    );
};

export default Hero;