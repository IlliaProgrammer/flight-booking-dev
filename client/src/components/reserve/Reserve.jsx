import React, {useContext, useState} from 'react';
import styles from "./Reserve.module.css"
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({setOpen, flightId}) => {
    const [selectedTickets, setSelectedTickets] = useState([]);

    const { date } = useContext(SearchContext);

   

    const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      const date = new Date(start.getTime());
  
      const dates = [];
  
      while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
      }
  
      return dates;
    };
  
    const alldates = getDatesInRange(date[0].startDate, date[0].endDate);


    const isAvailable = (ticketNumber) => {
      const isFound = ticketNumber.unavailableDates.some((date) =>
        alldates.includes(new Date(date).getTime())
      );
      console.log(isFound)
      return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        setSelectedTickets(
          checked
            ? [...selectedTickets, value]
            : selectedTickets.filter((item) => item !== value)
        );
      };

      const navigate = useNavigate();

      const handleClick = async () => {
        try {
          await Promise.all(
            selectedTickets.map((flightId) => {
              const res = axios.put(`/tickets/availability/${flightId}`, {
                dates: alldates,
              });
              return res.data;
            })
          );
          setOpen(false);
          navigate("/");
        } catch (err) {}
      };

    const {data, loading, error} = useFetch(`/flights/tickets/${flightId}`)
    return (
        <div className={styles.reserve}>
            <div className={styles.rContainer}>
                <FontAwesomeIcon icon={faCircleXmark} onClick={() =>setOpen(false)}  className={styles.rClose}/>
                <span>Select your  seats:</span>
                {data.map(item =>(
                    <div className={styles.rItem} key={item.title}>
                        <div className={styles.rItemInfo}>
                            <div className={styles.rTitle}>{item.title}</div>
                            <div className={styles.rDesc}>{item.desc}</div>
                            <div className={styles.rPrice}>{item.price}</div>
                        </div>
                        <div className={styles.rSelectTickets}>
                            {item.ticketNumbers.map(ticketNumber =>(
                                <div className={styles.ticket} key={ticketNumber._id}>
                                    <label>{ticketNumber.number}</label>
                                    <input type="checkbox" value={ticketNumber._id} onChange={handleSelect} disabled={!isAvailable(ticketNumber)}/>
                                </div> 
                            ))}
                        </div>
                    </div>
                ))}
                <button className={styles.rButton} onClick={handleClick}>Reserve Now!</button>
            </div>

        </div>
    );
};

export default Reserve;