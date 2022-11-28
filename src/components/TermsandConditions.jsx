import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import {Container} from 'react-bootstrap';
import Dashapp from './Dashapp';

function BodyOnlyExample() {
  return (
    
    <Card>
      <Dashapp />
      <Card.Body className='text-center' style={{ backgroundColor: '#C8B9D6', borderRadius: '3%'}}><strong ><h3>Terms & Conditions</h3></strong></Card.Body>
     <Container className = 'p-3'>
     <h5> The terms and conditions of a loan agreement as follows:</h5>

<h5>Fees and Charges :</h5><h6>These terms would deal with the applicable fees and charges levied by your loan provider. They can include processing fees, convenience charges, annual maintenance charges, bounce charges, and penal interest. Ensure that you understand all applicable fees and charges thoroughly before undertaking a loan.</h6>

<h5>Interest :</h5><h6>The terms and conditions here would pertain to the rate of interest charged by the loan provider. As per the stipulated due date, you would be required to furnish the interest payable.</h6>

<h5>Repayment :</h5><h6>This would stipulate the terms and conditions concerning the repayment of your personal loan. The EMI (Equated Monthly Installments) due every month is calculated by taking into account your interest rate, the repayment tenure and your loan amount.</h6>

<h5>Default :</h5><h6>If the borrower fails to pay the amount due on the relevant due dates, they would be defaulting on their payments. In such cases, the loan provider would generally follow-up by way of text or call and, at certain times, may levy a penalty.</h6>

<h5>Foreclosure :</h5><h6> When an individual is able to repay all their dues earlier than warranted, this is known as the foreclosure of a personal loan account. While certain loan providers would levy charges on foreclosure, others opt not to do so. For instance, the personal loan available on online platforms like Finserv MARKETS come with zero foreclosure charges.</h6>
 </Container>   
<Footer />
    </Card>


  );
}

export default BodyOnlyExample;