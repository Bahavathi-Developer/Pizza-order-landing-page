import React, { useState } from 'react'
import pizza2 from '../assets/pizza-2.png';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PickoftheWeek = () => {
      const [show, setShow] = useState(false);
  return (
    <section id="musttry" className='my-3'>
        <div className="text-center my-2 py-3">
            <h2 className="display-5 text-danger"> <i className="bi bi-search-heart"></i> Pick of the Week!</h2>
        </div>
        <Container>
            <Row className="align-items-center">
                <Col md={7}>
                    <img src={pizza2} alt="Pick of the Week" className="img-fluid rounded" />
                </Col>
                <Col>
                    <div className='p-3'>
                        <h2 className="h1">Double Cheese Fajita</h2>
                        <p className="lead text-muted">
                            loreum ipsum dolor sit amet, consectetur adipiscing elit.loreum ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <Button variant="danger" onClick={() => setShow(true)}> <i className="bi bi-basket"></i> Buy Now</Button>
                    </div>
                </Col>
            </Row>
            <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position='bottom-end'
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)}show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item added to cart!</Toast.Body>
          </Toast>
        </ToastContainer>

        </Container>
        
    </section>
  )
}

export default PickoftheWeek;