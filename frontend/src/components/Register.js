import {Button,Col,Row }from 'react-bootstrap';
import React,{useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Layout } from './onboarding/Layout';
import axios from 'axios';

export const Register = () => {

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [pwd, setPwd] = useState();
    // const [mobileNumber, setMobileNumber] = useState();

    const [register, setRegister] = useState({
        
        name: "",
        email: "",
        password: "",
        mobileNumber: "",
      workstatus: "",
        
     
        

    })

   
    const [id, setid] = useState("");
console.log("ID",id);
    useEffect(() => {
      
    console.log("id",id);
    }, [])
    


    function handleSubmit(e) {
        e.preventDefault()

        axios.post("http://localhost:8082/api/register",register)
        .then((response)=> {
          setid(response.data.id)
          
        })
        .catch(function (error) {
          console.log(error);
        });
       
        
    }


    function handleChange(e) {
        
setRegister({...register,[e.target.name]:e.target.value})

    }



  return (
      <div>
          
          {id === "" ? <Form className='form' onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Control className='form' name='name'  type="text" onChange={handleChange} placeholder="Enter the Name" />
              <Form.Control className='form'  name='email' type="email" onChange={handleChange} placeholder="Enter the Email" />
              
              <Form.Control
                  onChange={handleChange}
                  name="password"
                  className='form'
        type="password"
        id="inputPassword5"
        placeholder='Enter the password'
        aria-describedby="passwordHelpBlock"
      />
              <Form.Control onChange={handleChange} name="mobileNumber" className='form' type="text" placeholder="Enter the Mobile Number " />
              <Form.Label column sm="4">
          Work Status
              </Form.Label>
              
           <Col>   
              <Form.Check
            inline
            label="Fresher"
            name="workstatus"
            type={'radio'}
            value={"Fresher"}
           id={`inline-radio-1`}
            onChange={handleChange}

              /> 
              <Form.Check
            inline
            label="Experience"
            name="workstatus"
            value={"Experience"}
            type={'radio'}
             id={`inline-radio-2`}
           onChange={handleChange}
                  />
          </Col>
          <div style={{display: "flex",
           justifyContent: "center",
            alignItems: "center"
          }}>
<Button style={{width:"50%"}} type='submit' >Register</Button>

          </div>
              
   </Form.Group>
</Form>

              : <Layout workstatus={register.workstatus} id={id} />}
    </div>
  )
}
