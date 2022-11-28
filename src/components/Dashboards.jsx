import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import Dashapp from './Dashapp';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Userprofile from './Images/Userprofile.png'



export default function Dashboard() {
  const navigate= useNavigate();
  let loggedUser = JSON.parse(localStorage.getItem('user'));
  const RoutetoApplication =()=>{
    navigate("/application")
  }

  const businessloan =()=>{
    navigate("/applicationBusinessLoan")
  }

  const eduloan =()=>{
    navigate("/applicationEducationLoan")
  }

  const carloan =()=>{
    navigate("/applicationCarLoan")
  }

  const homeloan =()=>{
    navigate("/applicationHomeLoan")
  }

  const personalloan =()=>{
    navigate("/applicationPersonalLoan")
  }


  const colorStyles = {backgroundColor: '#009FAC'}
  const textstyle = {textAlign:'center'}
  return (
    <div>
      

      

      
      <Dashapp />
      <Container>
        
        <Row>
       
          
          <h3 className='d-flex align-items-center justify-content-center pt-3' > 
            Welcome {loggedUser.name}
            
          </h3>
          <div className='d-flex align-items-center justify-content-center'> 
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
            <div className='align-items-center justify-content-center'>
              <container style= {textstyle}>
            <h6 className='text-align-center justify-content-center'>
              <h6 className ='text-dark'>Email:{loggedUser.email}</h6>
              <h6 className ='text-dark'>Mobile:{loggedUser.mobile}</h6>
              </h6>
               </container>
               </div>
            
        </Row>
      </Container>

      <Container>
        
        <Row>
        <Box>
        <Stack direction="row" justifyContent="center"
        alignItems="center"
        spacing={10} margin={10}>


<Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/adult-son-sending-money-elderly-parents-online_74855-19682.jpg?size=626&ext=jpg&uid=R76852866&ga=GA1.2.1898586805.1663599920"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Business Loan
            </Typography>
            <Typography variant="body2" color="text.secondary">
            We at Natwest Bank understand your financial needs and offer you specially designed Business Loan which suits your business requirements.
            </Typography>
          </CardContent>
          <CardActions onClick={businessloan}>
          <Button size="small" variant= "contained">Apply Now</Button>
          </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/premium-vector/hands-holding-credit-card-graduate-cap-person-investing-knowledge-higher-education-flat-vector-illustration-finance-university-concept-banner-website-design-landing-web-page_74855-24759.jpg?size=338&ext=jpg&uid=R76852866&ga=GA1.2.1898586805.1663599920"
            alt="green iguana"
          />


          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Education Loan
            </Typography>
            <Typography variant="body2" color="text.secondary">
            We at Natwest Bank understand your career aspirations and offer Student Loan to aid your journey to higher education.
            </Typography>
          </CardContent>
          <CardActions onClick={eduloan}>
          <Button size="small" variant= "contained">Apply Now</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/man-woman-riding-moped-mountains_74855-10868.jpg?size=626&ext=jpg&uid=R76852866&ga=GA1.2.1898586805.1663599920"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Personal Loan 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Personal Loan is an unsecured loan that caters to all your financial needs such as travel, medical emergency or wedding.
            </Typography>
          </CardContent>
          <CardActions onClick={personalloan}>
          <Button size="small" variant= "contained">Apply Now</Button>
          </CardActions>
        </Card>
       


        </Stack>
        </Box>
        </Row>
      </Container>


      <Container>
        
        <Row>
        <Box>
        <Stack direction="row" justifyContent="center"
        alignItems="center"
        spacing={10} margin={10}>
 <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/car-finance-concept-illustration_114360-8058.jpg?size=626&ext=jpg&uid=R76852866&ga=GA1.2.1898586805.1663599920"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Loan for Car
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Car Loan is a one-stop solution to own your car.If your goal is to purchase a new car, we offer a wide range of products to meet your needs. </Typography>
          </CardContent>
          <CardActions onClick={carloan}>
          <Button size="small" variant= "contained">Apply Now</Button>
          </CardActions>
        </Card>
<Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/mortgage-loan-regulation-isometric-landing-page-cottage-house-with-key-contract-document-sign-hypothec-debt-basic-legal-adjustment-personal-bank-credit-buying-home-3d-web-banner_107791-3928.jpg?size=626&ext=jpg&uid=R76852866&ga=GA1.2.1898586805.1663599920"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Home Loan
            </Typography>
            <Typography variant="body2" color="text.secondary">
            You can get a Home Loan.If your purpose is to rebuild or purchase a new home.Achieve the dream of owning a home.
            </Typography>
          </CardContent>
          <CardActions onClick={homeloan}>
          <Button size="small" variant= "contained">Apply Now</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>


       


        </Stack>
        </Box>
        </Row>
      </Container>
     
 

    
<Footer />

  
    </div>
  );
}
