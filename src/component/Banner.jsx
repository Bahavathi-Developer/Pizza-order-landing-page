import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { Container,Col, Row } from 'react-bootstrap';
import pizza1 from '../assets/pizza-1.png';
import pizza2 from '../assets/pizza-2.png';
import pizza3 from '../assets/pizza-3.png';
import pizza4 from '../assets/pizza-4.png';


const Banner = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center align-items-center'>
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              {/* <img src={require('../assets/pizza-1.png')} className="d-block w-100" alt="first slide" /> */}
              <img src={pizza1} className="d-block w-100 h-100" alt="first slide" />
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p className='d-none d-sm-block'>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img src={pizza2} className="d-block w-100 h-100" alt="second slide" />
              <Carousel.Caption>
                <h3>Cheese Pizza</h3>
                <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
             <img src={pizza3} className="d-block w-50 h-50" alt="Third slide" />
              <Carousel.Caption className='text-dark'>
                <h3>Pepporoni</h3>
                <p className='d-none d-sm-block'>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className='text-center mt-4'>
        <h2 className="display-5">Pizza for Every Occasion!</h2>
        <p className="lead text-muted">
            Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
        </p>
      </div>
    </Container>
  );
}

export default Banner