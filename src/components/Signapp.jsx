import React, { useState } from 'react';
import { AppBar, Box, Button, Container, CssBaseline, IconButton, Menu,Toolbar,Typography } from '@mui/material';

import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


const Signapp = () => {
const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();
 const navigate = useNavigate ();
  const btclicked = ()=>{
  navigate("/login");
 }

 const RoutetoHome = ()=>{
 navigate("/");
 }

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
    <Navbar.Brand style ={{ padding:5}} onClick={RoutetoHome}>Natwest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            <Nav.Link onClick={btclicked}>Sign In</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
   
  
    
    </div>
  );
};
export default Signapp;
