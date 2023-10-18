import React from 'react';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { SearchContext } from "../../context/SearchContext";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';
import styles from "./Flight.module.css"

const Flight = () => {
    const location = useLocation()
    const [openModal, setOpenModal] = useState(false);
    const id = location.pathname.split("/")[2]
    const {data, loading, error} = useFetch(`/flights/find/${id}`)
    const { date, options } = useContext(SearchContext);
    console.log(date)
    const formattedEndDate = new Date(date[0].endDate).toLocaleDateString();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        if (user) {
          setOpenModal(true);
        } else {
          navigate("/login");
        }
      };

    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Header/>
            {options.ticket} tickets
            <h2>
                <b>${data.cheapestPrice * options.ticket}</b>
            </h2>
            {formattedEndDate}
            <button onClick={handleClick}>Reserve or Book Now!</button>
            {openModal && <Reserve setOpen={setOpenModal} flightId={id}/>}
        </div>
    );
};

export default Flight;