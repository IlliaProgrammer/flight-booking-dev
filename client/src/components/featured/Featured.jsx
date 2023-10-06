import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './Featured.module.css'; // Import the CSS module

const Featured = () => {

  const {data, loading, error} = useFetch("/flights/countByType")

  if (!data || data.length < 3) {
    return loading ? "Loading..." : "No data available.";
  }

  return (
    <div className={styles.featured}>
      {loading ? "loading" :<>
        <div className={styles.featuredItem}>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/221102111106-lufthansa-ffirst-class.jpg?c=original"
          alt=""
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>{data[0].type}</h1>
          <h2>{data[0].count} properties</h2>
        </div>
      </div>

      <div className={styles.featuredItem}>
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/220826031543-07-airplanes-business-class-seat.jpg?c=original&q=h_618,c_fill"
          alt=""
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>{data[1].type}</h1>
          <h2>{data[1].count} properties</h2>
        </div>
      </div>
      
      <div className={styles.featuredItem}>
        <img
          src="https://www.traveldailynews.asia/wp-content/uploads/2023/04/Air-India-01.jpg"
          alt=""
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>{data[2].type}</h1>
          <h2>{data[2].count} properties</h2>
        </div>
      </div>
      </>}
   
    </div>
  );
};

export default Featured;