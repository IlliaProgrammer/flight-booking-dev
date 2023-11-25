import React from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './Featured.module.css';

const Featured = () => {
  const { data, loading, error } = useFetch('https://skywings-api.onrender.com/api/flights/countByType');

  if (!data || data.length < 3) {
    return loading ? 'Loading...' : 'No data available.';
  }

  return (
    <section className={styles.featured}>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <article className={styles.featuredItem}>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/221102111106-lufthansa-ffirst-class.jpg?c=original"
              alt="First Class"
              className={styles.featuredImg}
            />
            <div className={styles.featuredTitles}>
              <h2>{data[0].type}</h2>
              <p>{data[0].count} properties</p>
            </div>
          </article>

          <article className={styles.featuredItem}>
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/220826031543-07-airplanes-business-class-seat.jpg?c=original&q=h_618,c_fill"
              alt="Business Class"
              className={styles.featuredImg}
            />
            <div className={styles.featuredTitles}>
              <h2>{data[1].type}</h2>
              <p>{data[1].count} properties</p>
            </div>
          </article>

          <article className={styles.featuredItem}>
            <img
              src="https://www.traveldailynews.asia/wp-content/uploads/2023/04/Air-India-01.jpg"
              alt="Economy Class"
              className={styles.featuredImg}
            />
            <div className={styles.featuredTitles}>
              <h2>{data[2].type}</h2>
              <p>{data[2].count} properties</p>
            </div>
          </article>
        </>
      )}
    </section>
  );
};

export default Featured;