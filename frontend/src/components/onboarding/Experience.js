import React,{useState} from 'react'
import {Button,Modal,Form,Row,Col} from 'react-bootstrap';

export const Experience = ({ onNext }) => {
    const [lgShow, setLgShow] = useState(true);
  return (
      <>
      {/* <div>
          <div>Experience</div>
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
              <Modal.Body>.
            
              </Modal.Body><Button style={{ width: "80px", float: "right" }} onClick={onNext} variant="primary">Next</Button>
          </Modal> 
       
      </div>*/}
  </>
  )
}
