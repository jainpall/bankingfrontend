import { Button, Container } from "@mui/material";
import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';
import Dashapp from './Dashapp';

const Success = props => {
    const styledColor = {
        backgroundColor: '#A58CC3',
       
        backgroundSize: "cover", backgroundRepeat: "no-repeat"
      
      }
    return (
      <div style={styledColor}>

      <Dashapp />
      <Row>
      <Col>
      
      <Container><center>

      <Card style={{ boxShadow: "0 0 20px #1F1F39", width: '20rem',"margin-top":"20px" }}>
      <Card.Body>
        <Card.Title>Thanks for Applying</Card.Title>
       
       
        <Card.Text>Successfully submitted the loan application.
          Our Bank executive will contact you shortly for further process!!
       
      </Card.Text>


      
       
      </Card.Body>
    </Card>
      </center>
      </Container></Col></Row></div>
    );
};

export default Success;