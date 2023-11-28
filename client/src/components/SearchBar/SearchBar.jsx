import React, {useState, useContext} from 'react';
import {
    faCalendarDays,
    faPerson,
    faPlane,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useNavigate } from "react-router-dom";
  import { DateRange } from "react-date-range";
  import { format } from "date-fns";
  import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import styles from "./SearchBar.module.css"
import { SearchContext } from "../../context/SearchContext";
import { useClickOutside } from '../../hooks/useClickOtside';
import { useDebounce } from '../../hooks/useDebounce';

const SearchBar = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      ticket: 1,
    });

    let dateNode = useClickOutside(() => {
      setOpenDate(false);
    });

    let optionNode = useClickOutside(() => {
      setOpenOptions(false);
    });

    const destinationParser = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };


    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };

    const { dispatch } = useContext(SearchContext);
  
    const handleSearch = () => {
      dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
      navigate("/flights", { state: { destination, date, options } });
    };
  

    return (
        <aside className={styles.headerSearch}>
          <div className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faPlane} className={styles.headerIcon} />
            <input
              type="text"
              placeholder="Where are you going?"
              className={styles.headerSearchInput}
              onChange={(e) => setDestination(destinationParser(e.target.value))}
            />
          </div>
          <div  ref={dateNode} className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className={styles.headerSearchText}
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={styles.date}
                minDate={new Date()}
              />
            )}
          </div>
          <div ref={optionNode} className={styles.headerSearchItem}>
            <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className={styles.headerSearchText}
            >{`${options.adult} adult · ${options.children} children · ${options.ticket} tickets`}</span>
            {openOptions && (
              <div className={styles.options}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Adult</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.adult <= 1}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.adult}
                    </span>
                    <button
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Children</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.children <= 0}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.children}
                    </span>
                    <button
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Tickets</span>
                  <div className={styles.optionCounter}>
                    <button
                      disabled={options.ticket <= 1}
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("ticket", "d")}
                    >
                      -
                    </button>
                    <span className={styles.optionCounterNumber}>
                      {options.ticket}
                    </span>
                    <button
                      className={styles.optionCounterButton}
                      onClick={() => handleOption("ticket", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.headerSearchItem}>
            <button className={styles.headerBtn} onClick={handleSearch}>
              Search
            </button>
          </div>
        </aside>
      );
    };

export default SearchBar;