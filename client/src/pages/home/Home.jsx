import React from 'react';
import CityList from '../../components/cityList/CityList';
import Comments from '../../components/Comments/Comments';
import Featured from '../../components/featured/Featured';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Mail from '../../components/mail/Mail';
import Navbar from '../../components/Navbar/Navbar';
import Recomended from '../../components/reconeded/Recomended';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Header/>
            <Hero/>
            <SearchBar/>
            <div className={styles.homeContainer}>
                <Featured/>
                <h1 className={styles.homeTitle}>Browse most popular cities</h1>
                <CityList/>
                <Comments/>
                <Mail/>
            </div>
        </div>
    );
};

export default Home;