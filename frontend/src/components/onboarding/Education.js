import React,{useState} from 'react'
import {Button,Modal,Form,Row,Col} from 'react-bootstrap';
import axios from 'axios';

export const Education = ({ onNext,id,step}) => {
    
    const [lgShow, setLgShow] = useState(true);
    const [expData, setExpData] = useState({

        workexperince: "",
        company: "",
        jobtitle: "",
        industry:"",
        annual_salary: "",
        department: "",
        role: "",
        working_since: "",
        notice_period: "",
        step:step
        

        


    });

    function handleSubmit(e) {
        console.log("hi");
setExpData({...expData,step:step+1})
       
        e.preventDefault();
        
        axios.put(`http://localhost:8082/api/register/${id}`, expData)
      .then((res) => {
        onNext();
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
    
}

    console.log("expData",expData);

    function handleChange(e) {
        e.preventDefault();

        const {name,value} = e.target;

        if (name === "workexperince" || name === "company" || name === "jobtitle" ||
            name === "working_since" || name === "annual_salary" || name === "department" ||
            name === "role" || name === "notice_period" || name === "industry") {
            
    setExpData({...expData,[name]:value})   

        }
        
    }
  return (
      <div>
          <div style={{float:"right"}}> <Button className='m-4'  onClick={()=>window.location.reload()} variant="primary">Log out</Button></div>
          <div>Education</div>
          <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Experience
          </Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group as={Row} className="m-5" controlId="formPlaintextEmail"> 
                      <Form.Label className="mb-3" sm="2">
                      Total work experience
                          </Form.Label>  
                          
              <Form.Select className="mb-3" onChange={handleChange} name='workexperince'  style={{width:"25%"}} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
                          </Form.Select>
                          <Form.Label className="mb-3" sm="2">
                      Company
                          </Form.Label>
                          <Form.Control name='company' onChange={handleChange} className="mb-3" type="text" placeholder="Enter the details" />   
                          <Form.Label  sm="2">
                          Job title
                          </Form.Label>
                          <Form.Control name='jobtitle' onChange={handleChange} className="mb-3" type="text" placeholder="Enter the details" /> 
                          <Form.Label className="mb-3" sm="2">
                     Work Since
                          </Form.Label>
                          <Form.Control name='working_since' onChange={handleChange} className="mb-3" type="date" placeholder="Enter the details" /> 
                          <Form.Label className="mb-3" sm="2">
                          Annual salary
                          </Form.Label>
                          <Form.Control className="mb-3" name='annual_salary' onChange={handleChange} type="text" placeholder="Enter the details" /> 
                          
                          <Form.Label className="mb-3" sm="2">
                          Role
                          </Form.Label>
                          <Form.Control name="role" className="mb-3"  onChange={handleChange} type="text" placeholder="Enter the details" /> 
                          <Form.Label className="mb-3" sm="2">
                          Department
                          </Form.Label>
                          <Form.Control className="mb-3" name='department' onChange={handleChange} type="text" placeholder="Enter the details" /> 
                          <Form.Label className="mb-3" sm="2">
                          Industry
                          </Form.Label>
                          <Form.Control className="mb-3" name='industry' onChange={handleChange} type="text" placeholder="Enter the details" /> 
                     
                          

                          <Form.Label className="mb-3" sm="2">
                         Notice Period
                          </Form.Label>
                          <Col>
                          <Form.Check
            inline
            label="15 Days"
            onChange={handleChange}
            value={"15 Days"}
            name="notice_period"
            type={'radio'}
            id={`inline-radio-1`}
                              />
                                                           <Form.Check
            inline
            label="30 Days"
            onChange={handleChange}
            value={"30 Days"}
            name="notice_period"
            type={'radio'}
            id={`inline-radio-2`}
                              />
                                                              <Form.Check
            inline
            label="More than 30 Days"
            onChange={handleChange}
            value={"More than 30 Days"}
            name="notice_period"
            type={'radio'}
            id={`inline-radio-3`}
          />

                          </Col>
         
          
        </Form.Group>
                 
    <Button type='submit' variant="primary">Next</Button>                 
</Form>
        </Modal.Body>
          </Modal>
          
    
         
    </div>
  )
}
