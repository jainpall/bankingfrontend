import { Button, Container, Table } from "react-bootstrap";
import React, { useState , useEffect} from 'react';
import Footer from "./Footer";
import Dashapp from "./Dashapp";
import axios from 'axios'




const Loantracking = () => {
    let loggedUser = JSON.parse(localStorage.getItem('user'));    
const [loantracking,setLoantracking] = useState([]);
var email =loggedUser.email
// const load = () =>{
   useEffect(() => {
    axios.get(`http://backend.pallavijainn.com:8080/applicationbyemail/${email}`)
    .then(res => {
      setLoantracking(res.data)
    })
    .catch((error)=> console.log( error))
   })
   

   
  
    
    // }

    


return (
    <div >

      <Dashapp />
      
      <Container className='mt-3 pt-3' style={{ borderRadius: '5px' }} >
      <div>
        
      {/* <h4 className="d-flex justify-content-start" > Please find your recent applications {loggeduser.name} </h4>   */}
      
        <div className='m-3' >
        {/* <Button className='me-3' onClick={load}>Refresh</Button> */}

       
        </div>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Loan Amount</th>
              <th>Loan Type</th>
              <th>Monthly Emi</th>
              <th>Roi</th>
              <th>Tenure</th>
              <th>Status</th>
           
            </tr>
          </thead>

          <tbody>
                                    {loantracking.map(
                                        data =>
                                            <tr key={data.id}>
                                                <td>{loggedUser.name}</td>
                                                <td>{data.loanAmount}</td>
                                                <td>{data.loanType}</td>
                                                <td>{data.monthlyEmi}</td>
                                                <td>{data.roi}</td>
                                                <td>{data.tenure}</td>
                                                <td>Pending</td>
                                                
                                               
                                            </tr>

                                    )
                                    }
                                </tbody>
         
        </Table>
      </Container>

      <Footer />
    </div>
  )
}


export default Loantracking;