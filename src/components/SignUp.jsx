import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Signapp from './Signapp';
import Footer from './Footer';
import Register from './Images/Register.png';

const Signup = () => {
const paperStyle = { padding: '30px 30px', margin: "20px auto", backgroundColor: '#5A2A7D' }
const headerStyle = { margin: 0, color: 'white', padding: 5 }
const styledColor = {
    backgroundColor: 'black',
    backgroundImage: "url('https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: "cover", backgroundRepeat: "no-repeat"
  }
  const btnStyle = { marginTop: 40, marginBottom: 40, backgroundColor: '#401664' }
  const styleTag = { color: 'white', padding: 10 }
  const navigate = useNavigate();
  
  const [emailid, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [pancard, setPancard] = useState('');
  var [creditrating, setCreditrating] = useState('');
  const [monthlyincome, setMonthlyincome] = useState('');
  const [password, setPassword] = useState('');

  var creditrating = 600+ Math.round(Math.random()*550);

  const onSubmit = (data) => {
    let credential = {
      "email": data.email,
      "name": data.name,
      "dob": data.dob,
      "address": data.address,
      "mobile": data.mobile,
      "pancard": data.pancard,
      // "creditrating": data.creditrating,
      "monthlyincome": data.monthlyincome,
      "password": data.password
      
    }
    console.log(credential);
    axios.post('http://backend.pallavijainn.com:8080/user', credential)
      .then(res => {
        console.log(res.data);
        alert("Registered successfully")
        navigate("/login")
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  return (
    <div style={styledColor}>
      <Signapp />
      <Container sx={{ display: { md: 'flex' } }}>
        <Container> 
         <br /><br />
         <br /><br />
         <br />
          <div className = 'container mt-5'
          > 
            {/* <img src = {Register}  /> */}
            <h4 className = 'text-dark'><strong>Register for Loan, if you</strong></h4><br></br>
           
            
            <h5 className = 'text-dark'><strong>are 18+</strong></h5><br></br>
            <h5 className = 'text-dark'><strong>have valid Pan Card</strong> </h5><br></br>
            <h5 className = 'text-dark'><strong>have not applied for a loan with us within the last 6 months.</strong></h5><br></br>
            <h5 className = 'text-dark'><strong>have not been declared bankrupt in the last 6 years</strong></h5><br></br>
          
          </div> 
        </Container>
        <Container >
          <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
              <h2 style={headerStyle}>Sign Up</h2>
            </Grid>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" variant="outlined" margin='normal'
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  // required: "Email is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                    message: "Email should contain @ and . domain",
                  }
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              
              <TextField id="margin-normal" name='name' onChange={(e) => setName(e.target.value)} placeholder="Enter Name" variant="outlined" margin='normal'
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" ,
                pattern:{
                  value: /^[a-zA-Z]{3,}$/,
                  message: "Name should contain more than 3 characters",
                }

                })}
            
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
              <TextField id="margin-normal" name='dob' onChange={(e) => setDob(e.target.value)} placeholder="Enter Dob" type="date" variant="outlined" margin='normal'
                className={`form-control ${errors.dob && "invalid"}`}
                {...register("dob", {
                  required: "Dob is Required"
                  // pattern: {
                  //   value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
                  //   message: "Date should be yyyy-mm-dd ",
                  // }
                })}
                onKeyUp={() => {
                  trigger("dob");
                }}
              />
              {errors.dob && (
                <small className="text-danger">{errors.dob.message}</small>
              )}
              <TextField id="margin-normal" name='address' onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" type="input" variant="outlined" margin='normal'
                className={`form-control ${errors.address && "invalid"}`}
                {...register("address", {
                  required: "Address is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9(?:_*.\-\/\\,\s)?]{10,100}$/,
                    message: "Address should be filled ",
                  }
                })}
                onKeyUp={() => {
                  trigger("address");
                }}
              />
              {errors.address&& (
                <small className="text-danger">{errors.address.message}</small>
              )}
              
              <TextField id="margin-normal" name='mobile' onChange={(e) => setMobileno(e.target.value)} placeholder="Enter PhoneNo." type="number" variant="outlined" margin='normal'
                className={`form-control ${errors.mobile && "invalid"}`}
                {...register("mobile", {
                  required: "Mobile is Required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "PhoneNumber must have 10 digits ",
                  }
                })}
                onKeyUp={() => {
                  trigger("mobileno");
                }}
              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile.message}</small>
              )}
              <TextField id="margin-normal" name='pancard' onChange={(e) => setPancard(e.target.value)} placeholder="Enter Pancard" type="input" variant="outlined" margin='normal'
                className={`form-control ${errors.pancard && "invalid"}`}
                {...register("pancard", {
                  required: "Pancard is Required",
                  pattern: {
                    value: /^[0-9a-zA-z]{10}$/,
                    message: "Pancard needs to be filled",
                  }
                })}
                onKeyUp={() => {
                  trigger("pancard");
                }}
              />
              {errors.pancard && (
                <small className="text-danger">{errors.pancard.message}</small>
              )}
              

            <TextField id="margin-normal" name='monthlyincome' onChange={(e) => setMonthlyincome(e.target.value)} placeholder="Enter Monthlyincome" type="number" variant="outlined" margin='normal'
                className={`form-control ${errors.monthlyincome && "invalid"}`}
                {...register("monthlyincome", {
                  required: "Monthlyincome is Required",
                  pattern: {
                    value: /^[0-9]{06}$/,
                    message: "Monthlyincome is required ",
                  }
                })}
                onKeyUp={() => {
                  trigger("monthlyincome");
                }}
              />
              {errors.monthlyincome && (
                <small className="text-danger">{errors.monthlyincome.message}</small>
              )}
              
              
              <TextField id="margin-normal" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password" variant="outlined" margin='normal'
                className={`form-control ${errors.name && "invalid"}`}
                {...register("password", {
                  // required: "password is Required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?!.* ).{8,40}$/,
                    message: "Password should contain 1 uppercase, special character & number",
                  }
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
              <Button style={btnStyle} type='submit' variant='contained' color='primary'>Sign Up</Button>
            </form>
          </Paper>
        </Container>
      </Container>
      <Footer />
    </div>
  )

}

export default Signup;