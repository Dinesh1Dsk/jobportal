import Button from 'react-bootstrap/Button';
import React, {useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Profile } from './onboarding/Profile';

const Login = ({token}) => {

  const [login, setLogin] = useState({});
  const [islogged, setisLogged] = useState(false)
  const [id, setid] = useState();
  const [error,setError]=useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    if (name==="name" || name=== "password" ) {
      
setLogin({...login,[name]:value})
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`http://localhost:8082/api/register/login`, login,config)
      .then((res) => {
        setid(res.data.user_id)
        setisLogged(!islogged);
        console.log(res);
        console.log("res id",res.data.id);
      
    })
    .catch((err) => {
      console.log('err', err);
      
      if (err.name === "AxiosError") {
        
        setError(!error)
      }
    });
    
  }
  return (
      <div  style={{margin:"10px"}}>
          
      {islogged ? <Profile id={id}/>:<><Form className='form' onSubmit={handleSubmit}>
              <Form.Control className='form' name='name' onChange={handleChange} type="text" placeholder="Enter the Name" />
              
              
        <Form.Control
          onChange={handleChange}
          className='form'
          name='password'
        type="password"
        id="inputPassword5"
        placeholder='Enter the password'
        aria-describedby="passwordHelpBlock"
      />
     {error && <p className='text-danger'>Enter  the correct User name or password</p>}         
              
              <Button type='submit'>Login</Button>
    
      </Form>
        
      </>}
     
    </div>
  )
}

export default Login;