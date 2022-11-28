import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu,Toolbar, Tooltip, Typography } from '@mui/material';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import {  useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
// import { useSelector } from 'react-redux'

const Header = () => {

// variable declaration
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();
 

// Redux
  // const user = useSelector((state) => state.user.value)
  // console.log(user);
  
//  Methods declaration
const navigate = useNavigate();
    const Logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    
     const YourProfile =() =>{
      navigate("/yourprofile");
     }

     const Dashboard =() =>{
      navigate("/dashboards");
     }

     const RoutetoHome=() =>{
      navigate("/")
     }

     const TermsandConditions =() =>{
      navigate("/termsandcondition");
     }
      const Loantracking =() =>{
        navigate("/loantracking");
      }


// Event Handler methods
 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#401664'}} variant="dark">
      <img style={{height:50}} src='https://tse3.mm.bing.net/th?id=OIP.iIo_hlKcl7tGv9eC7lvZIQHaHa&pid=Api&P=0'/>
    <Navbar.Brand style ={{ padding:5}} onClick= {RoutetoHome}>Natwest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={Dashboard}>Dashboard</Nav.Link>
            <Nav.Link onClick={YourProfile}> Profile</Nav.Link>
            <Nav.Link onClick={TermsandConditions}> Terms & Conditions</Nav.Link>
            <Nav.Link onClick={Loantracking}>Track Your Loan Status</Nav.Link>
             
          </Nav>
          <Nav>
            
            <Nav.Link onClick={Logout}eventKey={2}>
            Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  //   //  <AppBar position="static">
  //   //   <Container maxWidth="xl">
  //   //     <Toolbar disableGutters>
  //   //       <AccountBalanceWalletOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
  //   //       <Typography
  //   //         variant="h6"
  //   //         noWrap
  //   //         component="a"
  //   //         href="/"
  //   //         sx={{
  //   //           mr: 2,
  //   //           display: { xs: 'none', md: 'flex' },
  //   //           fontFamily: 'Roboto',
  //   //           fontWeight: 700,
  //   //           letterSpacing: '.3rem',
  //   //           color: 'inherit',
  //   //           textDecoration: 'none',
  //   //         }}
  //   //       >
  //   //         Natwest Group
  //   //       </Typography>
  //   //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //   //         <IconButton
  //   //           size="large"
  //   //           aria-label="account of current user"
  //   //           aria-controls="menu-appbar"
  //   //           aria-haspopup="true"
  //   //           onClick={handleOpenNavMenu}
  //   //           color="inherit"
  //   //         >
  //   //        </IconButton>
  //   //         <Menu
  //   //           id="menu-appbar"
  //   //           anchorEl={anchorElNav}
  //   //           anchorOrigin={{
  //   //             vertical: 'bottom',
  //   //             horizontal: 'left',
  //   //           }}
  //   //           keepMounted
  //   //           transformOrigin={{
  //   //             vertical: 'top',
  //   //             horizontal: 'left',
  //   //           }}
            
  //   //           sx={{
  //   //             display: { xs: 'block', md: 'none' },
  //   //           }}
  //   //         >
  //   //         </Menu>
  //   //       </Box>
  //   //       <AccountBalanceWalletOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
  //   //       <Typography
  //   //         variant="h5"
  //   //         noWrap
  //   //         component="a"
  //   //         href=""
  //   //         sx={{
  //   //           mr: 2,
  //   //           display: { xs: 'flex', md: 'none' },
  //   //           flexGrow: 1,
  //   //           fontFamily: 'monospace',
  //   //           fontWeight: 700,
  //   //           letterSpacing: '.3rem',
  //   //           color: 'inherit',
  //   //           textDecoration: 'none',
  //   //         }}
  //   //       >
  //   //         LOGO
  //   //       </Typography>
  //   //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //   //        <Typography textAlign="center" sx={{my: 2, color: 'white', display: 'inline', fontFamily: 'monospace', fontWeight: 700,
  //   //           letterSpacing: '.1rem',
  //   //           color: 'inherit',
  //   //           textDecoration: 'none', }}>
  //   //             {/* {user.username} */}
  //   //               </Typography>
  //   //       </Box>
  //   //       <Box sx={{ flexGrow: 0 }}>
           
  //   //              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //   //              <Button onClick={removetoken}
  //   //               sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Roboto', }}
  //   //               >LogOut</Button>
  //   //           </IconButton>
             
  //   //         <Menu
  //   //           sx={{ mt: '45px' }}
  //   //           id="menu-appbar"
  //   //           anchorEl={anchorElUser}
  //   //           anchorOrigin={{
  //   //             vertical: 'top',
  //   //             horizontal: 'right',
  //   //           }}
  //   //           keepMounted
  //   //           transformOrigin={{
  //   //             vertical: 'top',
  //   //             horizontal: 'right',
  //   //           }}
             
  //   //         >
  //   //         </Menu>
  //   //       </Box>
          
           
  //   //     </Toolbar>
       
  //   //   </Container>
     
  //   // </AppBar>
  )
}
export default Header;
