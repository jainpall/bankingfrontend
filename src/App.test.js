import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Emicalculator from './components/Emicalculator';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('test',()=>{
expect(true).toBe(true)
})

test('finding appName EMI Calculator', () => {
    render(
    <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<Emicalculator />}/>
        </Routes>
    </BrowserRouter>
        );
    const appName = screen.getByTestId('appName');
    expect(appName).toBeInTheDocument()
    expect(appName).toHaveTextContent('EMI Calculator')
  });
  

