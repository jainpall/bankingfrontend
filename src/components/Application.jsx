import { Button, Container, CssBaseline, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Dashapp from './Dashapp';
import Footer from './Footer';
import EmicalculatorLoanApp from './EmicalculatorLoanApp';
import { Col, Row } from 'react-bootstrap';
const Application = (props) => {
  let loggedUser = JSON.parse(localStorage.getItem('user'));
const paperStyle = { padding: '30px 30px', margin: "20px auto", backgroundColor: '#5A2A7D' }
const headerStyle = { margin: 0, color: 'white', padding: 5 }
const styledColor = {
    backgroundColor: 'white',
   
    backgroundSize: "cover", backgroundRepeat: "no-repeat"
  }
  const btnStyle = { marginTop: 40, marginBottom: 40, backgroundColor: '#401664' }
  const styleTag = { color: 'black', padding: 10 }
  const navigate = useNavigate();
  const [interest, setInterest] = useState(props.id);
  const [emailid, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [loanType, setLoanType] = useState(props.type);
  const [requiredloanamount, setRequiredLoanAmount] = useState('');
  const [loantenure, setLoanTenure] = useState('');
  const [monthlyincome, setMonthlyIncome] = useState('');
  const [existingmonthlyemi, setExistingMonthlyEmi] = useState('');
 
  const onSubmit = (data) => {
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    var interestCal = document.getElementById('interestCal').value;
    var loanAmountCal = document.getElementById('loanAmountCal').value;
    var tenureCal = document.getElementById('tenureCal').value;
    var emiCal = document.getElementById('emiCal').value;
    var totalEmi =  parseInt(data.existingmonthlyemi)+parseInt(emiCal);
    var monthlyincomePer = loggedUser.monthlyincome/100;
    //var maxMonthlyEMI = monthlyincomePer * 60;
    var maxMonthlyEMI = (Math.round(monthlyincomePer * 60)).toFixed(2)
    if(totalEmi>maxMonthlyEMI){
      alert("Your total EMI:"+totalEmi+" is exceeding your EMI eligibility:"+maxMonthlyEMI+". Please change loan amount or tenure");
    }else{

      let credential = {
        "email": loggedUser.email,
        "requiredloanamount": loanAmountCal,
        "loantenure": tenureCal,
        "monthlyEmi": emiCal,
        "roi":interestCal,
        "loanType" : loanType,
        "existingmonthlyemi": data.existingmonthlyemi
        
      }
      localStorage.removeItem("loanInfo");
      localStorage.setItem("loanInfo",JSON.stringify(credential));
      navigate("/offer")
      
     
      
    }
    
      
  }
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  return (
    <div style={styledColor}>
      
      
      
      
      
      <Dashapp />
      
      <Row>
      <Col>
      {/* <Container sx={{ display: { md: 'flex' } }}> */}
      <Container>
      <EmicalculatorLoanApp interest ={interest} loanType={loanType} />
      </Container>
      </Col>
      <Col>
        <Container >
          <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
              <h2 style={headerStyle}>Application for {loanType}</h2>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField name='email' disabled='disabled' value={loggedUser.email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" variant="outlined" margin='normal'
                className={`form-control `}
                
              />
             
              
              <TextField id="margin-normal" name='name'  disabled='disabled' value={loggedUser.name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" variant="outlined" margin='normal'
                className={`form-control `}
              />
             
               <TextField id="margin-normal" name='mobile'  disabled='disabled' value={loggedUser.mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" type="input" variant="outlined" margin='normal'
                className={`form-control `}
              />
             
              
              
              {/* <TextField id="margin-normal" name='requiredloanamount' onChange={(e) => setRequiredLoanAmount(e.target.value)} placeholder="Enter Required Loan Amount." type="input" variant="outlined" margin='normal'
                className={`form-control ${errors.mobile && "invalid"}`}
                {...register("mobile", {
                  required: "requiredloanamount is Required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "PhoneNumber must have 10 digits ",
                  }
                })}
                onKeyUp={() => {
                  trigger("mobileno");
                }}
              />
              {errors.mobileno && (
                <small className="text-danger">{errors.mobileno.message}</small>
              )} */}
              
               <TextField id="margin-normal" name='monthlyincome'  disabled='disabled' value={loggedUser.monthlyincome} onChange={(e) => setMonthlyIncome(e.target.value)} placeholder="Enter Monthly Income" type="number" variant="outlined" margin='normal'
                 className={`form-control `}
              />
            
               <TextField id="margin-normal" name='existingmonthlyemi' onChange={(e) => setExistingMonthlyEmi(e.target.value)} placeholder="Enter Existing Monthly Emi" type="number" variant="outlined" margin='normal'
                className={`form-control ${errors.monthlyincome && "invalid"}`}
                {...register("existingmonthlyemi", {
                  required: "Existing Monthly emi is Required",
        
                })}
                onKeyUp={() => {
                  trigger("existingmonthlyemi");
                }}
              />
              {errors.existingmonthlyemi && (
                <small className="text-danger">{errors.existingmonthlyemi.message}</small>
              )}
              
             <div><Button style={btnStyle} type='submit' variant='contained' color='primary'>Submit</Button></div>
              
            </form>
          </Paper>
        </Container>
        </Col>
      
      
      </Row>
      <Footer />
    </div>
  )

}

export default Application;