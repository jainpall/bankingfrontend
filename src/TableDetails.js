import React from 'react';
import './App.css';
import { Tab } from 'bootstrap';
import { Table, TableCell, TableHead, TableRow,TextField, Container } from '@mui/material';

// import { Button, Container, CssBaseline, Grid, Paper, TextField } from '@mui/material'

export default function TableDetails(props) {
  
  return (
   <Container>
    <Table style={{ boxShadow: "0 0 10px #1F1F39",width: '100%' ,border: '2px solid #CCC'}} aria-label="simple table">
        <TableHead>
            <div style={{"display":"none"}}>
            
            <TextField   id="loanTypeCal" 
                       type="hidden"
                       name="loanTypeCal"
                       value={props.loanType}
                       
                    />
               <TextField   id="interestCal" 
                       type="hidden"
                       name="interestCal"
                       value={props.interest}
                       
                    />
                    <TextField   id="loanAmountCal" 
                       type="hidden"
                       name="loanAmountCal"
                       value={props.pAmount}
                       
                    />
                    <TextField  id="tenureCal" 
                       type="hidden"
                       name="tenureCal"
                       value={props.duration}
                       
                    />
                    <TextField  id="emiCal" 
                       type="hidden"
                       name="emiCal"
                       value={props.emi}
                       
                    /></div>
            <TableRow>
        
                <TableCell className="ETableCellText"><strong>Loan Amount</strong></TableCell>
                <TableCell className="ETableCellVal"><strong>₹</strong>{props.pAmount} </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="ETableCellText"><strong>Interest %</strong></TableCell>
                <TableCell className="ETableCellVal" id="interest">{props.interest} </TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="ETableCellText"><strong>Tenure(Months)</strong></TableCell>
                <TableCell className="ETableCellVal" id="tenure">{props.duration} </TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="ETableCellText"><strong>EMI (Monthly)</strong></TableCell>
                <TableCell className="ETableCellVal"><strong>₹</strong>{props.emi}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="ETableCellText"><strong>Total Interest</strong></TableCell>
                <TableCell className="ETableCellVal"><strong>₹</strong>{props.TotalAmountOfInterest} </TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="ETableCellText"><strong>Total Payment</strong><br/>(Loan Amount + Interest)</TableCell>
                <TableCell className="ETableCellVal"><strong>₹</strong>{props.totalAmt ? props.totalAmt:0}</TableCell>

                </TableRow>
                </TableHead>




                
            

        </Table>
        </Container>
  )

  }
