import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from "./Recomended.module.css"


const Recomended = () => {
    const { data, loading, error } = useFetch("/flights?featured=true");

    return (
      <div className={styles.fp}> {/* Use the imported style */}
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item) => (
              <div className={styles.fpItem} key={item._id}> 
                {/* <img
                  src={item?.photos[0]}
                  alt=""
                  className={styles.fpImg}
                /> */}
                <span className={styles.fpName}>{item.name}</span> 
                <span className={styles.fpCity}>{item.city}</span> 
                <span className={styles.fpPrice}>Starting from ${item.cheapestPrice}</span> 
                {item.rating && (
                  <div className={styles.fpRating}>
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    );
  };

export default Recomended;