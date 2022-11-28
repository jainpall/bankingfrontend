import { Container } from '@mui/material';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Emicalculator from './Emicalculator';
import Footer from './Footer';
import Header from './Header';
import Page1 from './Images/Page1.png';
import Page2 from './Images/Page2.png';
import Page3 from './Images/Page3.png'
function Home() {
  return (
  <div>
   <Header />
    <Carousel fade >
    
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src={Page1}
         alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Loan Offers </h3>
          <h5><strong>Different type of customize loans as per your need</strong> </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 "
          src={Page2}
         
          alt="Second slide"
        />
       <Carousel.Caption>
          <h3>Quick to Apply </h3>
          <h5><strong>Pre-filled details to make the journey easier. </strong></h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30"
          src={Page3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Early -Repayment </h3>
          <h5><strong>
            Early- Repay without any charges
            </strong></h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div> 
    <Container div className='mt-4'>

    <Emicalculator/>
    </Container>
    </div>

    <Footer />


    </div>
  )

}

export default Home