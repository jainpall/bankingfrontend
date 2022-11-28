import  React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Loans
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Explore More',
    description: ['Internet Banking', 'Mobile Banking'],
  },
  {
    title: 'Popular Products',
    description: [
      'Home Loan',
      'Car Loan',
      'Business Loan',
      'Personal Loan',
      'Education Loan'

      
    ],
  },
  {
    title: 'Rates and Charges',
    description: ['Interest Rate', 'Service Charges and Fees'],
  },
  {
    title: 'Customer Care ',
    description: ['1800 102 5678', '1800 104 1234'],
  },
  
  
];

function PricingContent() {
  const styledColor={backgroundColor:'#401664' , padding: 2.5}
  return (
    <Grid style={styledColor}>
      <GlobalStyles styles={{ ul: { margin: 10, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="common.white" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="common.white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright color="common.white" sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </Grid>
  );
}

export default function Footer() {
  return <PricingContent />;
}