import React, {useState} from 'react';
import Step1 from '../step1/Step1';
import Step2 from '../step2/Step2';
import Step3 from '../Step3/Step3';
import Stepper from '../Stepper/Stepper';
import styles from "./Reserve.module.css"

const Reserve = ({setOpen, flightId}) => {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const list = [
    <Step1 flightId={flightId}  onNext={handleNextStep}/>,
    <Step2  onNext={handleNextStep}/>,
    <Step3 setOpen={setOpen}/>
  ];

  
  return (
    <div className={styles.reserve}>
       <Stepper list={list} setOpen={setOpen} currentStep={currentStep}/>
    </div>
  );
};

export default Reserve;