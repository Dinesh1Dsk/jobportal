import React, { useState } from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { BasicDetails } from './BasicDetails';
import { Profile } from './Profile';

export const Layout = ({workstatus,id}) => {
    const [step, setStep] = useState(1);
  
    
    
    
    const handleNext = () => {

        if (workstatus==="Experience") {
            
           setStep(step + 1); 
        } else {
            
            setStep(step + 2); 
        }
      
    };


  return (
      <div>
          
      {step === 1 && <BasicDetails onNext={handleNext} id={id} step={step} />}
      {step === 2 && <Education onNext={handleNext} id={id} step={step}  />}
      {(workstatus==="Experience"&& step===3)&&<Profile id={id} step={step} /> }
          {(workstatus==="Fresher"&&step === 3) && <Profile  id={id} step={step}/>}
    </div>
  )
}
