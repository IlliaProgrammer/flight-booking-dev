import React from 'react';
import Step1 from '../step1/Step1';
import Step2 from '../step2/Step2';
import Stepper from '../Stepper/Stepper';
import styles from "./Reserve.module.css"

const Reserve = ({setOpen, flightId}) => {
  const list = [
    <Step1 flightId={flightId}/>,
    <Step2/>
  ];

  return (
    <div className={styles.reserve}>
       <Stepper list={list} setOpen={setOpen}/>
    </div>
  );
};

export default Reserve;