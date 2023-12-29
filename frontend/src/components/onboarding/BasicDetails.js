import React,{useState,useEffect} from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

export const BasicDetails = ({ onNext,id,step }) => {
    
    
    const [lgShow, setLgShow] = useState(true);
    
    const [basicDetails, setBasicDetails] = useState(
        {
            qualification: [],
            qualificationDetails: "",
            skils: [],
            current_city: "",
            state: "",
            step:step


        }
    )

  
    function handleSubmit(e) {
         e.preventDefault();
        console.log("hi");
        setBasicDetails((prevDetails) => ({
            ...prevDetails,
            step: 3,
          }));
        console.log("hi",basicDetails.step);
       
        onNext();
        axios.put(`http://localhost:8082/api/register/${id}`, basicDetails)
      .then((res) => {
        
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
    
}



    function handleChange(e) {
        const { name } = e.target;
        const { value } = e.target;
         
        if (name === "qualification") {
            
            setBasicDetails({ ...basicDetails,qualification:[...basicDetails.qualification,value] })

        }

        if (name === "qualificationDetails" ||name === "state" || name === "current_city" ) {
            
            setBasicDetails({ ...basicDetails,[name]:value})

        }
        
            
        if (name === "skils") {
            
            setBasicDetails({ ...basicDetails,skils:[...basicDetails.skils,value] })

        }    
        
    }

    console.log("bas",basicDetails);

  return (
      <div>
       <div style={{float:"right"}}> <Button className='m-4'  onClick={()=>window.location.reload()} variant="primary">Log out</Button></div>
         <div>BasicDetails</div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Basic Details
          </Modal.Title>
        </Modal.Header>
              <Modal.Body>
              <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Education
        </Form.Label>
        <Col sm="10">
        <Form.Check
            inline
            label="10Th"
            value={"10Th"}
            name="qualification"
            onChange={handleChange}
            type={'checkbox'}
            id={`inline-checkbox-1`}
                              />
                               <Form.Check
            inline
            label="12th"
            value={"12Th"}
            onChange={handleChange}
              name="qualification"
            type={'checkbox'}
            id={`inline-checkbox-2`}
                              />
                               <Form.Check
            inline
            label="UG"
             value={"UG"}
            name="qualification"
            onChange={handleChange}
            type={'checkbox'}
            id={`inline-checkbox-3`}
                              />
                               <Form.Check
            inline
             label="PG"
            value={"PG"}
            name="qualification"
            onChange={handleChange}
            type={'checkbox'}
            id={`inline-checkbox-4`}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
        <Form.Label column sm="2">
          Education Details
                          </Form.Label>
                          <Col sm="10">
          <Form.Control type="text" onChange={handleChange} name='qualificationDetails'  placeholder="Enter the details" />
                          </Col>
                          <Form.Label column sm="2">
          Skils
        </Form.Label>
        <Col sm="10">
                              <Form.Check
                                  onChange={handleChange}
            inline
            label="Html"
            name="skils"
            value={"Html"}
            type={'checkbox'}
            id={`inline-checkbox-1`}
                              />
                              <Form.Check
          onChange={handleChange}
            inline
            label="Css"
            value={"Css"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-2`}
                              />
                               <Form.Check
            inline
            onChange={handleChange}
            label="Java Script"
            value={"Java Script"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-3`}
                              />
                                                    <Form.Check
            inline
            onChange={handleChange}
        label="Type Script"
        value={"Type Script"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-4`}
          />
                               <Form.Check
            inline
            onChange={handleChange}
            label="Java"
            value={"Java"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-5`}
                              />
                                                    <Form.Check
            inline
            onChange={handleChange}
            label="Python"
            value={"Python"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-6`}
                              />
                                                    <Form.Check
            inline
            onChange={handleChange}
            label="Node Js"
            value={"Node Js"}
            name="skils"
            type={'checkbox'}
            id={`inline-checkbox-7`}
          />
        </Col>
      
                          <Form.Label column sm="2">
         State
        </Form.Label>
        <Col sm="10">
          <Form.Control  onChange={handleChange} name='state' type="text" placeholder="Enter the details" />
                          </Col>
          
                          <Form.Label column sm="2">
         City
        </Form.Label>
        <Col sm="10">
          <Form.Control onChange={handleChange} name='current_city' type="text" placeholder="Enter the details" />
                          </Col>
                         
                           
                      </Form.Group>
       <Button type="submit" variant="primary">Next</Button>              
    </Form>

 
                  

        </Modal.Body>
      </Modal>

          
    </div>
  )
}
