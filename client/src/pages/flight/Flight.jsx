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
import Slider from '../../components/Slider/Slider';
import {BsCalendar3, BsPersonAdd, BsCheckLg} from "react-icons/bs"
import {BiSolidPlaneAlt, BiSolidPlaneLand} from "react-icons/bi"

const Flight = () => {
    const location = useLocation()
    const [openModal, setOpenModal] = useState(false);
    const id = location.pathname.split("/")[2]
    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/flights/find/${id}`)
    const { date, options } = useContext(SearchContext);
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
            <Slider/>
            <div className={styles.container}>
              <div className={styles.textcontainer}>
                <div className={styles.hot}>#Hot sales</div>
                <div className={styles.name}>{data.name}</div>
                <div className={styles.cities}>{data.city}</div>
                <p>{data.description}</p>
              </div>
              <sidebar className={styles.sidebar}>
                <h2 className={styles.price}>
                    <b>${data.cheapestPrice * options.ticket}</b>
                </h2>
               
                
                <p className={styles.infos}><BsCalendar3/> {formattedEndDate}</p>
                <p className={styles.infos}><BsPersonAdd/> {options.ticket} personas</p>
                <p className={styles.infos}><BiSolidPlaneAlt/> Kyiv - {data.city}</p>
                <p className={styles.infos}><BiSolidPlaneLand/>Stop: {data.stop}</p>
                <button onClick={handleClick} className={styles.subButton}>Reserve or Book Now!</button>
                <div>
                  <p className={styles.infos}><BsCheckLg className={styles.check}/> Dinner included</p>
                  <p className={styles.infos}><BsCheckLg className={styles.check}/> Life insurance</p>
                  <p className={styles.infos}><BsCheckLg className={styles.check}/> Premium seats</p>
                </div>
              </sidebar>
            </div>
           
            
            
            
            {openModal && <Reserve setOpen={setOpenModal} flightId={id}/>}
        </div>
    );
};

export default Flight;