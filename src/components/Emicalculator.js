import { Slider, Table, TableCell, TableRow, Typography, Container } from '@mui/material';
import React, { useState } from 'react'
import TableDetails from '../TableDetails';



const Emicalculator = () => {


  const[pAmount, setpAmount] = useState(2755000);
  const[interest, setInterest] = useState(7);
  const[duration, setDuration] = useState(147);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration = 360;
  
  const intr = interest /1200;
  const emi = duration ? Math.round(pAmount * intr/(1- (Math.pow(1/(1 + intr), duration)))) : 0;
  const totalAmt = duration * emi;
  var TotalAmountOfCredit = Math.round((emi/ intr) * (1-Math.pow((1+ intr), (-duration))));
  const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

  return (
    <Container>
    <h2 data-testid="appName" classnName= "mx-auto my-1"><u>EMI Calculator</u></h2>
      <div>
        <Typography gutterBottom><strong> Loan Amount</strong></Typography>
        <Slider value = {pAmount} onChange={(event,vAmt) =>{setpAmount(vAmt)}} defaultvalue= {pAmount} max={maxValue}/>
        </div>
        <div>
        <Typography gutterBottom><strong> Interest Rate %</strong></Typography>
        <Slider value = {interest} onChange={(event,vInt) =>{setInterest(vInt);}} max={intMax} defaultvalue= {interest} />
        </div>
       <div>
       <Typography gutterBottom><strong> Tenure (Months) </strong></Typography>
        <Slider value = {duration} onChange={(event,vDur) =>{setDuration(vDur);}} max={maxDuration} defaultvalue= {duration} />
        </div>
        <div>
        <Table>
        <TableRow>
        <TableCell>
        <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest ={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
        
        </TableCell>
        
        </TableRow>
        </Table>
        </div>
        </Container>

        
  )
}

export default Emicalculator;
