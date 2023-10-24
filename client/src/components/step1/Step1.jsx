import React, {useContext, useState} from 'react';
import styles from "./Step1.module.css"

import useFetch from '../../hooks/useFetch';
import { SearchContext } from '../../context/SearchContext';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaymentCard from '../step2/Step2';
import flight_image from "../../assets/plane_seats.png"
import {BsFillCircleFill, BsCheckLg} from "react-icons/bs"

const Step1 = ({flightId, onNext }) => {
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
          onNext();
        } catch (err) {}
      };

    const {data, loading, error} = useFetch(`/flights/tickets/${flightId}`)
    return (
       
            <div className={styles.rContainer}>
                <span>Select your  seats:</span>
                <div className={styles.seatswrapper}>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="626"
                      height="500"
                      viewBox="0 330 600 300" 
                      fill="none"
                      className={styles.background}
                    >
                      <g filter="url(#filter0_d_2623_14115)">
                        <path
                          d="M445 -566C426 -652.5 393.5 -781 360 -781C326.5 -781 295.5 -653.5 275 -566C259.681 -500.613 242.535 -405.832 235.812 -367.757C233.842 -356.6 232.884 -345.304 232.884 -333.975V218V284.008C232.884 286.269 232.118 288.463 230.71 290.233L206.959 320.089C200.939 327.656 193.853 334.311 185.923 339.844L126.374 381.394L-656.202 808C-673.979 819.311 -707.016 857.945 -701.356 923.719C-701.08 926.931 -698.054 929.06 -694.993 928.046C-634.946 908.131 -205.816 776.008 22.6772 705.855C32.1867 702.936 41.9226 701.5 51.8702 701.5H230V1205.5C230 1296.64 259.392 1432.57 264.307 1454.67C264.777 1456.78 265.276 1458.8 265.828 1460.89L281.801 1521.5L-89.2393 1767.5C-92.0726 1771.67 -96.3392 1786.9 -90.7393 1814.5L328.975 1700.5L332.5 1713.88C332.5 1713.88 342.27 1750 360 1750C377.73 1750 387.5 1713.88 387.5 1713.88L391.025 1700.5L809.261 1814.5C814.861 1786.9 810.594 1771.67 807.761 1767.5L438.199 1521.5L454.172 1460.89C454.724 1458.8 455.223 1456.78 455.693 1454.67C460.609 1432.57 490 1296.64 490 1205.5V701.5H668.133C678.078 701.5 687.812 702.936 697.32 705.855C925.814 776.007 1354.95 908.132 1414.99 928.046C1418.05 929.061 1421.08 926.931 1421.36 923.719C1427.02 857.945 1393.98 819.311 1376.2 808L593.626 381.394L534.076 339.843C526.147 334.31 519.061 327.656 513.042 320.09L489.29 290.233C487.882 288.464 487.116 286.269 487.116 284.008V218V-333.074C487.116 -345.001 486.057 -356.873 483.898 -368.602C476.802 -407.176 459.299 -500.904 445 -566Z"
                          fill="url(#paint0_linear_2623_14115)"
                        />
                        <path
                          d="M126.613 381.833L126.638 381.82L126.66 381.804L186.209 340.254C194.179 334.693 201.3 328.005 207.35 320.401L231.101 290.544C232.58 288.686 233.384 286.382 233.384 284.008V218V-333.975C233.384 -345.276 234.339 -356.543 236.304 -367.671C243.028 -405.747 260.171 -500.515 275.487 -565.886C285.738 -609.64 298.608 -663.366 313.099 -706.152C320.345 -727.548 327.988 -746.18 335.898 -759.455C339.854 -766.093 343.863 -771.368 347.903 -774.978C351.944 -778.588 355.979 -780.5 360 -780.5C364.02 -780.5 368.078 -778.573 372.159 -774.936C376.238 -771.3 380.3 -765.99 384.314 -759.313C392.341 -745.96 400.124 -727.234 407.464 -705.776C422.142 -662.867 435.012 -609.14 444.512 -565.893C458.808 -500.806 476.31 -407.086 483.407 -368.512C485.559 -356.813 486.616 -344.971 486.616 -333.074V218V284.008C486.616 286.382 487.42 288.686 488.899 290.544L512.651 320.401C518.7 328.006 525.821 334.693 533.79 340.253L593.34 381.804L593.362 381.82L593.387 381.833L1375.93 808.422C1375.94 808.425 1375.94 808.428 1375.95 808.431C1393.58 819.657 1426.5 858.112 1420.86 923.677C1420.61 926.588 1417.88 928.478 1415.15 927.571C1355.1 907.655 925.956 775.527 697.467 705.377C687.911 702.443 678.127 701 668.133 701H490H489.5V701.5V1205.5C489.5 1296.57 460.122 1432.45 455.205 1454.56C454.736 1456.66 454.239 1458.68 453.688 1460.77L437.716 1521.37L437.625 1521.72L437.922 1521.92L807.401 1767.86C808.742 1769.89 810.468 1774.62 811.175 1782.26C811.882 1789.88 811.571 1800.37 808.876 1813.88L391.156 1700.02L390.67 1699.89L390.541 1700.37L387.017 1713.74L387.016 1713.75L387.016 1713.75L387.011 1713.77L386.99 1713.84C386.971 1713.91 386.943 1714.01 386.905 1714.14C386.83 1714.4 386.717 1714.79 386.567 1715.28C386.267 1716.26 385.819 1717.67 385.225 1719.35C384.037 1722.73 382.27 1727.22 379.954 1731.71C377.637 1736.2 374.781 1740.67 371.424 1744C368.067 1747.34 364.251 1749.5 360 1749.5C355.749 1749.5 351.933 1747.34 348.576 1744C345.219 1740.67 342.363 1736.2 340.046 1731.71C337.73 1727.22 335.963 1722.73 334.775 1719.35C334.181 1717.67 333.733 1716.26 333.433 1715.28C333.283 1714.79 333.17 1714.4 333.095 1714.14C333.057 1714.01 333.029 1713.91 333.01 1713.84L332.989 1713.77L332.984 1713.75L332.984 1713.75L332.983 1713.75L329.459 1700.37L329.33 1699.89L328.844 1700.02L-90.3546 1813.88C-93.0491 1800.37 -93.3605 1789.88 -92.6539 1782.26C-91.946 1774.62 -90.2203 1769.89 -88.8796 1767.86L282.077 1521.92L282.376 1521.72L282.284 1521.37L266.312 1460.77C265.761 1458.68 265.264 1456.66 264.795 1454.56C259.878 1432.45 230.5 1296.57 230.5 1205.5V701.5V701H230H51.8702C41.8737 701 32.0883 702.443 22.5305 705.377C-205.958 775.528 -635.097 907.654 -695.151 927.571C-697.884 928.477 -700.608 926.588 -700.858 923.676C-706.5 858.112 -673.576 819.657 -655.947 808.43C-655.943 808.428 -655.938 808.425 -655.934 808.422L126.613 381.833Z"
                          stroke="#BCBAF7"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2623_14115"
                          x="-706"
                          y="-781"
                          width="2132"
                          height="2603.5"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2623_14115" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2623_14115" result="shape" />
                        </filter>
                        <linearGradient
                          id="paint0_linear_2623_14115"
                          x1="-702"
                          y1="346"
                          x2="1422"
                          y2="346"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#99BBFF" />
                          <stop offset="0.489583" stop-color="#CCCCFF" />
                          <stop offset="1" stop-color="#99BBFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className={styles.backgroundI}>

                    </div>
                  {data.map((item,index) =>(
                    <div className={styles.rItem} key={item.title}>
                        <div className={styles.rItemInfo}>
                            <div className={styles.rTitle}>{item.title} {index === 0 && <span className={styles.blueBox}>Best price</span>}</div>
                            <div className={styles.rDesc}>{item.desc}</div>
                            {index === 0 ? 
                              <div className={styles.benefits}>
                                <ul>
                                  <li className={styles.itemList}><BsFillCircleFill className={styles.circle}/> Built-in entertainment system</li>
                                  <li className={styles.itemList}><BsFillCircleFill className={styles.circle}/> Complimentary snacks and drinks</li>
                                  <li className={styles.itemList}><BsFillCircleFill className={styles.circle}/> One free carry-on and personal item</li>
                                </ul>
                              </div> : 
                              <div className={styles.benefits}>
                              <ul>
                                <li className={styles.itemList}><BsCheckLg className={styles.check}/> Extended leg room</li>
                                <li className={styles.itemList}><BsCheckLg className={styles.check}/> First two checked bags free</li>
                                <li className={styles.itemList}><BsCheckLg className={styles.check}/> Personalized service</li>
                              </ul>
                            </div>
                            }
                            <div className={styles.rPrice}>Price: ${item.price}</div>
                        </div>
                        <div className={styles.rSelectTickets}>
                            {item.ticketNumbers.map(ticketNumber =>(
                                <div className={styles.ticket} key={ticketNumber._id}>
                                    <label>{ticketNumber.number}</label>
                                    <input type="checkbox" value={ticketNumber._id} className={styles.checkBox} onChange={handleSelect} disabled={!isAvailable(ticketNumber)}/>
                                </div> 
                            ))}
                        </div>
                    </div>
                ))}
                </div>
                <button className={styles.rButton} onClick={handleClick}  disabled={isButtonDisabled}>Reserve Now!</button>
            </div>

        
    );
};

export default Step1;