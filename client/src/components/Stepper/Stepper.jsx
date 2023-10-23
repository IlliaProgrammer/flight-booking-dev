import React, { useState } from "react";
import styles from './Stepper.module.css';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"

const Stepper = ({ setOpen, list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsCount = list.length;
  const steps = [];

  for (let i = 0; i < stepsCount; i++) {
    steps.push(
      <div
        onClick={() => setCurrentStep(i)}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        key={i}
      >
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (list.length - 1)) * currentStep;

  const onNext = () => {
    if (currentStep !== list.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

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