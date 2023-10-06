import React from 'react';
import styles from "./SearchItem.module.css"
import flightPicture from "../../assets/airlines/image 25.png"
import {Link} from "react-router-dom"

const SearchItem = ({item}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={flightPicture} alt="" />
            </div>
            <div className={styles.block}>
                <p className={styles.time}>{item.time}</p>
                <p>{item.title}</p>
            </div>
            <div className={styles.block}>
                {item.stop ? 
                    <>
                        <p className={styles.time}>1 stop</p>
                        <p>{item.stop}</p>
                    </> :
                    <p>Nostops</p>
                    }

                
            </div>
            <div className={styles.block}>
                <p className={styles.time}>from {item.cheapestPrice}</p>
                <p>Hawaiian Airlines</p>
            </div>
            <div>
                <Link to={`/flights/${item._id}`}>
                    <button>book</button>
                </Link>
            </div>
        </div>
    );
};

export default SearchItem;