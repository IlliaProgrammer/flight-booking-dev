import React, { useState } from 'react';
import styles from './Mail.module.css';
import axios from 'axios';

const Mail = () => {
  const [credentials, setCredentials] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/email/send`, credentials, {
        withCredentials: true,
      });
      console.log(res.data); // You can handle the response data here
    } catch (err) {
      console.log(err.res);
    }
  };

  return (
    <div className={styles.mail}>
      <h1 className={styles.mailTitle}>Save time, save money!</h1>
      <span className={styles.mailDesc}>Sign up, and we'll send the best deals to you</span>
      <form className={styles.mailInputContainer}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={credentials.email}
        />
        <button onClick={handleClick}>Subscribe</button>
      </form>
    </div>
  );
};

export default Mail;