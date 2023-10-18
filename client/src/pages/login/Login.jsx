import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Login.module.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });


  const { user ,loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
      console.log(res)
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <>
   <Navbar />
      <Header />
      <div className={styles.session}>
        <div className={styles.left}>
          <svg width="300" height="302.5" viewBox="0 0 300 302.5">
            <path className="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z" />
          </svg>
        </div>
        <form className={`${styles.logIn} ${styles.floatingLabel}`} autoComplete="off">
          <h4 className={styles.title}>
            We are <span className={styles.nuva}>SkyWings.Express|</span>
          </h4>
          <p className={styles.description}>
            Welcome back! Log in to your account to view today's clients:
          </p>
          <div className={styles.floatingLabel}>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className={styles.lInput}
            />
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <div className={styles.icon}>
            
            </div>
          </div>
          <div className={styles.floatingLabel}>
            <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleChange}
              className={styles.lInput}
            />
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <div className={styles.icon}>
              
            </div>
          </div>
          <button
            disabled={loading}
            onClick={handleClick}
            className={styles.lButton}
          >
            Login
          </button>
        </form>
      </div>
    </>
   
  );
};

export default Login;





      
        