import React, { useContext } from 'react';
import styles from "./SearchItem.module.css"
import { MdFlight} from "react-icons/md"
import {BiSolidRightArrow} from "react-icons/bi"
import {AiOutlineDash} from "react-icons/ai"
import {BsCircle} from "react-icons/bs"
import {Link} from "react-router-dom"

const SearchItem = ({item}) => {
    return (
        <div className={styles.wrapper}> 
            <div className={styles.top}>
                <div className={styles.left}><MdFlight className={styles.icon}/><p>Kyiv - {item.city}</p></div>
                <div className={styles.right}>
                    <p>Starts from: ${item.cheapestPrice}</p>
                    <Link to={`/flights/${item._id}`} className={styles.bookButton}> 
                        <button>book</button>
                    </Link>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.first}>
                    <p className={styles.kyiv}>Kyiv</p>
                    <p>{item.time}</p>
                </div>
                <div className={styles.second}>
                    <div className={styles.stops}><p>Depature</p>{item.stop ? <p>1 Stop</p> : <p>No stops</p>}<p>Arrival</p></div>
                    <div><BiSolidRightArrow/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><BsCircle/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><AiOutlineDash/><BiSolidRightArrow/></div>
                    <div className={styles.bottomRow}>{item.stop}</div>
                </div>
                <div className={styles.first}>
                    <p className={styles.kyiv}>{item.city}</p>
                    <p className={styles.kyiv}>{item.name}</p>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;