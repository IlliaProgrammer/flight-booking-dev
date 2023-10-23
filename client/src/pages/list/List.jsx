import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import styles from "./List.module.css"; 
import SearchItem from "../../components/searchItem/SearchItem"
import useFetch from '../../hooks/useFetch';



const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error} = useFetch(`/flights?city=${destination}&min=${min || 0 }&max=${max || 999}`)
  
  console.log(date)


  return (
    <div>
      <Navbar/>
      <Header/>
      <div className={styles.listContainer}> 
        <div className={styles.listWrapper}> 
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>
            <div className={styles.lsItem}> 
              <label>Destination</label>
              <input placeholder={destination}  onChange={(e) => setDestination(e.target.value)} type="text" />
            </div>
            <div className={styles.lsItem}> 
              <label>Check-in Date</label>
              <span className={styles.dateString} onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className={styles.date}
                />
              )}
            </div>
            <div className={styles.lsItem}> 
              <label>Options</label>
              <div className={styles.lsOptions}> 
                  <div className={styles.lsOptionItem}>
                      <span className={styles.lsOptionText}>
                        Min price <small>per flight</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                        className={styles.lsOptionInput}
                      />
                    </div>
                <div className={styles.lsOptionItem}> 
                  <span className={styles.lsOptionText}> Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                  />
                </div>
                <div className={styles.lsOptionItem}> 
                  <span className={styles.lsOptionText}> Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                  />
                </div>
                <div className={styles.lsOptionItem}> 
                  <span className={styles.lsOptionText}>Tickets</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder={options.ticket}
                  />
                </div>
              </div>
              
            </div>
          </div>
          <div className={styles.listResult}>
            {loading ? "loading" : <>
                {
                  data.map((item, index) =>(
                    <SearchItem key={item._id} item={item}/>
                  ))
                }
              </>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;