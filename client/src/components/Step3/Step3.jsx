import React from 'react';
import { useNavigate } from 'react-router-dom';
import check from "../../assets/checkmark.svg"
import styles from './Step3.module.css'; // Import the CSS module

const Step3 = ({ setOpen }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        setOpen(false);
        navigate("/");
    };

    return (
        <div className={styles.checkWrapper}>
               <img src={check} className={styles.check} alt="" />
                <h3 className={styles.checkText}>Your tickets were successfully booked</h3>
                <button className={styles.rButton} onClick={handleClick}>
                Ok!
            </button>
        </div>
    );
};

export default Step3;