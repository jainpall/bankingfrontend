import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate(); 
  const RoutetoSignUp=()=> {
    navigate('/signup')
  } 
  const RoutetoLogin =() => {
    navigate('/login')
  }

    const RoutetoAboutus =() => {
       navigate('/aboutus')
    }

    const RoutetoHome =()=> {
      navigate('/')
    }
  
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#401664'}} variant="dark">
      <img style={{height:50}} src='https://tse3.mm.bing.net/th?id=OIP.iIo_hlKcl7tGv9eC7lvZIQHaHa&pid=Api&P=0'/>
    <Navbar.Brand style ={{ padding:5}} >Natwest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={RoutetoHome}>Home</Nav.Link>
            <Nav.Link onClick={RoutetoAboutus}>About Us</Nav.Link>
            <Nav.Link href= "#Personalloan">Personal Loan</Nav.Link>
            <Nav.Link href= "#Businessloan">Business Loan</Nav.Link>
            <Nav.Link href= "#Educationloan">Education Loan</Nav.Link>
            <Nav.Link href= "#Carloan">Car Loan</Nav.Link>
            <Nav.Link href= "#Homeloan">Home Loan</Nav.Link>

           
          </Nav>
          <Nav>
            <Nav.Link onClick={RoutetoSignUp} >Sign Up</Nav.Link>
            <Nav.Link onClick={RoutetoLogin}> Sign In
            </Nav.Link>
              
             
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;