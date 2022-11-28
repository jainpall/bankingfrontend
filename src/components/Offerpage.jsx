import Card from 'react-bootstrap/Card';
import { Col, Container, Row,  Table } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
import Dashapp from './Dashapp';
import axios from 'axios';
function TextExample() {
  let loanInfo = JSON.parse(localStorage.getItem('loanInfo'));
  let data= JSON.parse(sessionStorage.getItem("data"));
  
  const styledColor = {
    backgroundColor: '#A58CC3',
   
    backgroundSize: "cover", backgroundRepeat: "no-repeat"
  }
  const navigate = useNavigate();
  const application =() =>{
    localStorage.removeItem("loanInfo");
    navigate("/dashboards");
   }
   const submitApplication =() =>{
    let newRecord = {
      "email": loanInfo.email,
      "loanType" :loanInfo.loanType,
      "roi":loanInfo.roi,
      "loanAmount":loanInfo.requiredloanamount,
      "tenure":loanInfo.loantenure,
      "monthlyEmi":loanInfo.monthlyEmi
    }
    axios.post('http://backend.pallavijainn.com:8080/application', newRecord , {headers : { 'Authorization': "Bearer " + data.token }})
      .then(res => {
        console.log(res);
        localStorage.removeItem("loanInfo");
        navigate("/success");
      })
      .catch(function (error) {
        console.log(error);
        alert("Failure in Loan Application Submission")
      }
      )
   
   }
  return (
    <>
     <div style={styledColor}>

      <Dashapp />
      <Row>
      <Col>
      
      <Container><center>
    {(
      loanInfo == null ? (<Card style={{ width: '18rem',"margin-top":"20px" }}>
      <Card.Body>
        <Card.Title>Offer Expired</Card.Title>
       
        <Card.Text>
        The Offer you are looking for is expired!!!
        </Card.Text>
       
      </Card.Body>
    </Card>)
          : (<Card style={{boxShadow: "0 0 20px #1F1F39", width: '18rem' ,"margin-top":"20px"}}>
          <Card.Body>
            <Card.Title>Congratulations for {loanInfo.loanType}.
             This is the best offer for you</Card.Title>
           
            <Card.Text>
            <Table variant="secondary" >
          <thead>
            <tr>
              <th colSpan={2} className="text-center" >Offer Details</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loan Amount</td>
              <td>{loanInfo.requiredloanamount}</td>
            </tr>
            <tr>
              <td>Tenure</td>
              <td>{loanInfo.loantenure} months</td>
            </tr>
            <tr>
              <td>ROI</td>
              <td>{loanInfo.roi}</td>
            </tr>
            
            <tr>
              <td>Emi Amount </td>
              <td>{loanInfo.monthlyEmi}</td>
            </tr>
           
          </tbody>
        </Table>
            </Card.Text>
            <Card.Link onClick={application}>Decline</Card.Link>
            <Card.Link onClick={submitApplication}>Accept</Card.Link>
          </Card.Body>
        </Card>)
  )}
    </center></Container></Col></Row></div>
    </>
  );
}

export default TextExample;