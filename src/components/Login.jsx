import { Grid, Paper, TextField, Button, Typography, Container } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { doLogin } from '../auth';
import Footer from './Footer';
import Lognapp from './Lognapp';


const Login = () => {
  const paperStyle = { padding: 40, height: '70vh', margin: "20px auto", backgroundColor: '#5A2A7D' }
  const btnstyle = { marginTop: 40, backgroundColor: '#401664' }
  const typStyle = { marginTop: 10 }
  const headColor = { color: 'white' }
  const styleTag = { color: 'black', paddingTop:20}
  const styledColor = {
    backgroundColor: 'blue',
    backgroundImage: "url('https://media.istockphoto.com/id/1250581414/photo/blue-double-exposure-of-money-coins-stacking-with-bar-graph-for-financial-and-investment.jpg?b=1&s=170667a&w=0&k=20&c=jDcVWUWBjSiOaX0vz5qFq-C8Sfo5mArWYoTLEFfR8C4=')",
    backgroundSize: "cover", backgroundRepeat: "no-repeat"
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loginCheck = () => {
    let newRecord = {
      "email": email,
      "password": password
    }
    axios.post(
      'http://backend.pallavijainn.com:8080/login', newRecord)
      .then(res => {
       
        console.log(res.data.user);
        sessionStorage.setItem("data",JSON.stringify(res.data));
        localStorage.setItem("user",JSON.stringify(res.data.user));
        let token = res.data.token;
        doLogin(token, () => {
          console.log("logindetailssaved")
          navigate("/dashboards")
        })
        // alert("login successfully")
      })
      .catch(function (error) {
        console.log(error);
        alert("login failed kindly input correct details")
      }
      )

   
  }

  return (
    <div style={styledColor}>
      <Lognapp />
      <Container sx={{ display: { md: 'flex' } }}>
        <Container>
          <h3 style={styleTag}>Benefits of Natwest Loans </h3> <br></br>
          <div>
            <h5>Instant Loan Credit</h5><br></br>
            <h5>Highly rated by Independent Bodies</h5><br></br>
            <h5>Apply only in 10 Minutes </h5><br></br>
            <h5>Comprehensive Range of Products</h5><br></br>
            <h5>Fast & Secure</h5><br></br>
            <h5>Early Loan Re-pay </h5><br></br>
          </div>
        </Container>
        <Container >
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <h2 style={headColor}>Sign In</h2>
            </Grid>
            <form>
              <TextField sx={{ input: { backgroundColor: 'whitesmoke' } }} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email" type="text" margin='normal' required fullWidth />
              <TextField sx={{ input: { backgroundColor: 'whitesmoke' } }} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password" type="password" margin='normal' fullWidth />
              <Button style={btnstyle} onClick={loginCheck} variant='contained' color='primary'>Sign in </Button>
              <Typography gutterBottom style={typStyle}> Do you have an account ?
                <Link to="/signup">
                  Sign Up
                </Link>
              </Typography>
            </form>
          </ Paper>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}

export default Login