import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import React, { useState } from 'react';
import Dashboards from './components/Dashboards';
import Privateroute from './Privateroute.jsx';
import Application from './components/Application';
import Success from './components/Success';
import AboutUs from './components/Aboutus.jsx';
import YourProfile from './components/YourProfile.jsx';
import Offerpage from './components/Offerpage.jsx';
import TermsandConditions from './components/TermsandConditions.jsx';
import Loantracking from './components/Loantracking.jsx';

function App() {
return (
    
<div >


     {/* <Header /> */}
 
       <Routes>
      <Route path = "/" element ={<Home/>} />
      
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/aboutus" element={<AboutUs />}/>
      <Route element={<Privateroute />}>
      <Route path="/dashboards" element={<Dashboards />}/>
      <Route path="/applicationHomeLoan" element={<Application id="8" type="Home Loan" />}/>
      <Route path="/applicationPersonalLoan" element={<Application id="12" type="Personal Loan" />}/>
      <Route path="/applicationCarLoan" element={<Application id="10" type="Car Loan" />}/>
      <Route path="/applicationEducationLoan" element={<Application id="6" type="Education Loan" />}/>
      <Route path="/applicationGoldLoan" element={<Application id="2" type="Gold Loan" />}/>
      <Route path="/applicationBusinessLoan" element={<Application id="14" type="Business Loan" />}/>
      <Route path="/success" element={<Success />}/>
      <Route path="/offer" element={<Offerpage />}/>
      <Route path="/yourprofile" element ={<YourProfile />}/>
      <Route path ="/termsandcondition" element={<TermsandConditions />}/>
      <Route path ="/loantracking" element={<Loantracking />}/>
      
      
     </Route>
    </Routes> 
    {/* <Footer /> */}
    </div>
  );
}

export default App;
