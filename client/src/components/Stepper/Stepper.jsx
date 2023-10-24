import React, { useState } from "react";
import styles from './Stepper.module.css';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"

const Stepper = ({ setOpen, list,  currentStep}) => {
  const steps = [];



  const progressLineWidth = (100 / (list.length - 1)) * currentStep;


  return (
    <section className={styles.stepper}>
    <FontAwesomeIcon icon={faCircleXmark} onClick={() =>setOpen(false)}  className={styles.rClose}/>
    <div className={styles.steps_container}>
      <div className={styles.steps_wrapper}>{steps}</div>
      <div
        className={styles.progress_line}
        style={{ width: `${progressLineWidth}%` }}
      ></div>
    </div>
    <div>{React.cloneElement(list[currentStep])}</div>
  </section>
  );
};

export default Stepper;