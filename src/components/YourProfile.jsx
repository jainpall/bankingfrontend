import React from 'react'
import { Col, Container, Row,  Table } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Footer from './Footer'
import Dashapp from './Dashapp'
import Userprofile from './Images/Userprofile.png'


const YourProfile = () => {
  let loggedUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div  style={{ backgroundColor: ' #A58CC3'}}>
    <Dashapp />
      <Container>
        <Row className="mt-4 pt-4 " style={{marginBottom:50}}>
          <Col lg={4} md={6} sm={9} style={{ backgroundColor: '#C8B9D6', borderRadius: '3%'}} className="p-3 m-auto shadow-lg rounded-lg " >
            <h4 className='text-center'  >Your Profile Info</h4>
            <div className='d-flex align-items-center justify-content-center' >
            <Image
              className="mb-4"
              src={Userprofile}
              width={120}
              height={120}
              alt="171x180"
              rounded
              roundedCircle
            />
            </div>
            <Table variant="secondary" >
      <thead>
        <tr>
          <th colSpan={2}>Basic Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{loggedUser.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{loggedUser.email}</td>
        </tr>
        <tr>
          <td>Phone No</td>
          <td>{loggedUser.mobile}</td>
        </tr>
        
        <tr>
          <td>Dob </td>
          <td>{loggedUser.dob}</td>
        </tr>
        <tr>
          <td>PanCard</td>
          <td>{loggedUser.pancard}</td>
        </tr>

        <tr>
          <td>MonthlyIncome</td>
          <td>{loggedUser.monthlyincome}</td>
        </tr>
        <tr>
          <td>Credit Rating</td>
          <td>{loggedUser.creditrating}</td>
        </tr>
      </tbody>
    </Table>
      </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default YourProfile;