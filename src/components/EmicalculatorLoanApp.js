import { Slider, Table, TableCell, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'
import TableDetails from '../TableDetails';



const EmicalculatorLoanApp = (props) => {


  const[pAmount, setpAmount] = useState(1000000);
  const[interest, setInterest] = useState(props.interest);
  const[loanType, setLoanType]= useState(props.loanType);
  const[duration, setDuration] = useState(60);
  const maxValue = 6000000;
  const intMax = 20;
  const maxDuration = 360;
  
  const intr = interest /1200;
  const emi = duration ? Math.round(pAmount * intr/(1- (Math.pow(1/(1 + intr), duration)))) : 0;
  const totalAmt = duration * emi;
  var TotalAmountOfCredit = Math.round((emi/ intr) * (1-Math.pow((1+ intr), (-duration))));
  const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);

  return (
    <div>
    {/* <h2 classnName= "CalHeading"><u>Calculator</u></h2> */}
      <div className= 'pt-5'>
        <Typography gutterBottom><strong> Select Loan Amount</strong></Typography>
        <Slider value = {pAmount} onChange={(event,vAmt) =>{setpAmount(vAmt)}} defaultvalue= {pAmount} max={maxValue}/>
        </div>
        {/* <div>
        <Typography gutterBottom><strong> Interest Rate %</strong></Typography>
        <Slider value = {interest} onChange={(event,vInt) =>{setInterest(vInt);}} max={intMax} defaultvalue= {interest} />
        </div> */}
       <div>
       <Typography gutterBottom><strong> Select Tenure (Months) </strong></Typography>
        <Slider value = {duration} onChange={(event,vDur) =>{setDuration(vDur);}} max={maxDuration} defaultvalue= {duration} />
        </div>
        <div>
        <Table>
        <TableRow>
        <TableCell>
        <TableDetails loanType={loanType} pAmount={pAmount} totalAmt={totalAmt} interest ={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
        
        </TableCell>
        
        </TableRow>
        </Table>
        </div>
        </div>

        
  )
}

export default EmicalculatorLoanApp;
