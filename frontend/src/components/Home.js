import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Login from './Login'
import { Register } from './Register';

import { Test } from "./Test";

 const Home = () => {
   
     const [isLogin, setIsLogin] = useState(false);
     const [isRegister, setIsRegister] = useState(false);


     function register() {
         setIsRegister(!isRegister);
         setIsLogin(false)
     }

     function login() {
        setIsLogin(!isLogin)
        setIsRegister(false);
      
     }
   
    return (
      


<>
            
  <div style={{float:"right"}}>
            <Button className='m-4' onClick={register} variant="primary">Register</Button>
                <Button className='m-4'  onClick={login} variant="primary">Login</Button>
                
           


            </div>
            

            {isLogin && <Login />}
            {isRegister && <Register />}
            {/* <Test></Test> */}

        </>
        

      
  )
}
export default Home;