import React, { useState } from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signapp = () => {

  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const navigate = useNavigate();
  const btclicked=() => {
    navigate("/signup");

  }
   
  const RoutetoHome =()=> {
    navigate("/");
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#401664'}} variant="dark">
    <img style={{height:50}} src='https://tse3.mm.bing.net/th?id=OIP.iIo_hlKcl7tGv9eC7lvZIQHaHa&pid=Api&P=0'/>
  <Navbar.Brand style ={{ padding:5}} onClick={RoutetoHome}>Natwest</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
        </Nav>
        <Nav>
          <Nav.Link onClick={btclicked}>Sign Up</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
  </Navbar>

    
  );
};
export default Signapp;

