import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { SearchContext } from '../../context/SearchContext';

import styles from './Step3.module.css'; // Import the CSS module
import "./Step3ticket.css"

const Step3 = ({ setOpen, step1Data }) => {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);
    const { date, options } = useContext(SearchContext);
    const formattedEndDate = new Date(date[0].endDate).toLocaleDateString();

    function mapIdsToNumbers(idArray) {
        const idNumberMap = {
          "652d9f385005eac7c86b4c54": 101,
          "652d9f385005eac7c86b4c55": 102,
          "652d9f385005eac7c86b4c56": 103,
          "652d9f385005eac7c86b4c57": 104,
          "652d9f385005eac7c86b4c58": 105,
          "652d9fad5005eac7c86b4c5c": 201,
          "652d9fad5005eac7c86b4c5d": 202,
          "652d9fad5005eac7c86b4c5e": 203,
          "652d9fad5005eac7c86b4c5f": 204,
          "652d9fad5005eac7c86b4c60": 205,
          // Add more mappings as needed
        };
      
        return idArray.map((id) => ( idNumberMap[id]));
      }

    const handleClick = () => {
        setOpen(false);
        navigate("/");
    };

    console.log()

    return (
        <div className={styles.checkWrapper}>
            <main className="ticket-system">
                <div class="top">
                    <h1 class="title">Wait a second, your ticket is being printed</h1>
                    <div class="printer" />
                </div>
                <div className="receipts-wrapper">
                    <div className="receipts">
                        <div className="receipt">
                            <div className="route">
                            <h2>KYIV</h2>
                            <svg className="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
                                <path fill="#3f32e5" d="M497.25 357v-51l-204-127.5V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V178.5L12.75 306v51l204-63.75V433.5l-51 38.25V510L255 484.5l89.25 25.5v-38.25l-51-38.25V293.25l204 63.75z"/>
                            </svg>
                            <h2>BERLIN</h2>
                            </div>
                            <div className="details">
                            <div className="item">
                                <span>Passanger</span>
                                <h3>{user.username}</h3>
                            </div>
                            <div className="item">
                                <span>Flight No.</span>
                                <h3>US6969</h3>
                            </div>
                            <div className="item">
                                <span>Departure</span>
                                <h3>{formattedEndDate} 15:33</h3>
                            </div>
                            <div className="item">
                                <span>Gate Closes</span>
                                <h3>15:03</h3>
                            </div>
                            <div className="item">
                                <span>Language</span>
                                <h3>English</h3>
                            </div>
                            <div className="item">
                                <span>Seat</span>
                                <h3>{mapIdsToNumbers(step1Data).map((el)=>(
                                    <span>{el} </span>
                                ))}</h3>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </main>
                <button className={styles.rButton} onClick={handleClick}>
                Ok!
                </button>
        </div>
    );
};

export default Step3;