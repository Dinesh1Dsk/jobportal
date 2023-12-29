import React,{useState,useEffect} from 'react'

import { Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

export const Profile = ({ id,step}) => {
    const [data, setData] = useState();
    


    useEffect(() => {
         function getData() {
    
        axios.get(`http://localhost:8082/api/register/${id}`)
            .then( async(res) => {
                let data =await res.data;
                setData(data);
                console.log("res", res);
            })
            .catch((err) => {
                console.log('Error ');
            });
        }
        getData();
  
}, [id],[step])

    console.log("data",data);
    return (
      // workexperince: "",
      // company: "",
      // jobtitle: "",
      // industry:"",
      // annual_salary: "",
      // department: "",
      // role: "",
      // working_since: "",
      // notice_period:""


      <>
     <div style={{float:"right"}}> <Button className='m-4'  onClick={()=>window.location.reload()} variant="primary">Log out</Button></div>
           <h1 className="text-center">Profile </h1>
    <div className="container">
      <div className="row">
                    <div className="col-md-12">
                        <Card className="profile-display mt-3">
    <Card.Body>
      <Card.Title className='text-start'>{data?.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-start">{data?.current_city}{"  "} {data?.state}</Card.Subtitle>
     
    
      
    </Card.Body>
                    </Card>
                        
                    <Card className="profile-display mt-3">
    <Card.Body>
   
      <Card.Text className='text-start'>
                                    <strong>Qualification:</strong>
                    <ul> {data?.qualification.map((list, index) => <li key={list + data.name}>{list}:{list.q }</li>)}</ul>
      </Card.Text>
      
    </Card.Body>
                        </Card>
                        <Card className="profile-display mt-3">
    <Card.Body>
   
      <Card.Text className='text-start '>
        <strong>Skils:</strong> {<ul> {data?.skils.map(list =><li key={list + data.name}>{list}</li>)}</ul>}
      </Card.Text>
                            </Card.Body>
                            
                            
                        </Card>
                        
                        {data?.workstatus==="Experience" &&<> <Card className="profile-display mt-3">
                            <Card.Body>
                                


   <div> <h1>Work Experience:</h1> </div>
      <Card.Text className='text-start '>
                   
                    <h5>{`Company          : ${data?.company} `}</h5>
                    <h5>{`Role             : ${data?.role} `}</h5>
                    <h5>{`Working Since    : ${data?.working_since} `}</h5>
                    <h5>{`Annual Salary    : Rs:${data?.annual_salary} CTC`}</h5>
                    <h5>{`Notice Period    : ${data?.notice_period}`}</h5>
      </Card.Text>
                            </Card.Body>
                            
                            
                        </Card>
                        
                        <Card className="profile-display mt-3">
    <Card.Body>
   
                    <Card.Text className='text-start '>
                      <Row>

                        <Col>

                     <h5>{`Job Title     : ${data?.jobtitle} `}</h5>
                    <h5>{`Department     : ${data?.department} `}</h5>
                    <h5>{`Industry       : ${data?.industry} `}</h5>

                        </Col>
                      </Row>
                    
      </Card.Text>
                            </Card.Body>
                            
                            
                        </Card>
                        
                        </>}
                           
                    
                </div>    
                </div>    
                </div>    </>
  )
}
