import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Footer from './Footer';
import aboutus0 from './Images/aboutus0.png';
import aboutus1 from './Images/aboutus1.png';
import aboutus2 from './Images/aboutus2.png';
import aboutus3 from './Images/aboutus3.png';
import Header from './Header';
import business from './Images/business.png';
import Car from './Images/Car.png';
import Education from './Images/Education.png';
import Personal from './Images/Personal.png';
import Home from './Images/Home.png';




const AboutUs = () => {

    return (
        <div>
            <Header />
            <Container className="px-5 py-5 m-auto">
                <Row style={{ backgroundColor: '#F4F0E8' }} >
                    <Col>
                        <div className='container px-5' >
                            <br />
                            <h1>Who we are</h1>
                            <h5>NatWest Group is a relationship bank for a digital world. We champion potential; breaking down barriers and building financial confidence so the 19 million people, families and businesses we serve in communities throughout the UK and Ireland can rebuild and thrive. If our customers succeed, so will we.</h5>
                            <Button size="lg" className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={aboutus0}

                                alt="contact us"
                            //   rounded
                            // roundedCircle
                            />
                        </div>
                    </Col>
                </Row>
                <Row style={{ backgroundColor: '#F1CD83' }} >

                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={aboutus1}
                                alt="contact us"
                            />
                        </div>
                    </Col>
                    <Col>
                        <br />
                        <h1>Banking brands</h1>
                        <h4>How do we drive growth and support the financial lives of our personal, business and corporate customers? Through our brilliant banking brands. Check out the wide range of financial products and services we offer.</h4>
                        <Button size="lg" className='my-4'>See our Brands</Button>
                    </Col>
                </Row>
                <Row id="Personalloan" style={{ backgroundColor: '#5A287D' }} >
                    <Col>
                        <div className='container px-5 text-light' >
                            <br />
                            <h1>Personal Loan</h1>
                            <h5>Personal Loan is an unsecured loan that caters to all your financial needs such as travel, home renovation, applying online courses, medical emergency or wedding. 
								Also, with our  Personal Loan online services, you can get access to the funds quickly.Personal loans are loans that can cover a number of personal expenses. </h5>
                            <Button size="lg" className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={Personal}

                                alt="contact us"
                            //   rounded
                            // roundedCircle
                            />
                        </div>
                    </Col>
                </Row>

                <Row id= "Businessloan" style={{ backgroundColor: '#F1CD83' ,marginTop: 2 }} >

                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={business}
                                alt="contact us"
                            />
                        </div>
                    </Col>
                    <Col>
                        <br />
                        <h1>Business Loan</h1>
                        <h4>Get loans to match your specific needs. Our tailor made loans for SMEs let you choose the option most convenient and suitable for your business.
						Get Export Finance, Letter of Credit, Bank Guarantees and foreign currency loans to support your business.you are sure to get the required capital for your business at an industry-best interest rate, along with pre and post disbursement support.
						</h4>
                        <Button size="lg" className='my-4'>Go to At a Glance</Button>
                    </Col>
                </Row>
				<Row id= "Carloan" style={{ backgroundColor: '#F4F0E8' }} >
                    <Col>
                        <div className='container px-5' >
                            <br />
                            <h1>Car Loan</h1>
                            <h5>It's easy to apply online. You can get a quote at the start of your application and then decide if you want to take out a loan or not.
                            Applying for a car loan is now hassle-free, easy, and paperless. Just make a few clicks, and you can submit the car loan application form online. Almost every bank today offers car loans at attractive interest rates. Based on one’s affordability, it is now quite easy to take a car loan and then pay EMIs without really biting into a person’s finances.
                            </h5>
                            <Button size="lg" className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={Car}

                                alt="contact us"
                            //   rounded
                            // roundedCircle
                            />
                        </div>
                    </Col>
                </Row>
	<Row id= "Educationloan" style={{ backgroundColor: '#F1CD83' }} >

                <Col>
	             <div className='d-flex align-items-center justify-content-center' >
		        <Image
			    src={Education}
			    alt="contact us"
		         />
	          </div>
             </Col>
           <Col>
	        <br />
	   <h1>Education Loan</h1>
	   <h4>Going abroad for higher studies? Or there’s a course that is domestic and expensive? Whatever be your reason for higher studies, it’s understood that higher education is often very expensive, with the rising cost of education. But that shouldn’t stop you!
	 
	  </h4>
	<Button size="lg" className='my-4'>Go to At a Glance</Button>
    </Col>
    </Row>

	<Row id= "Homeloan"style={{ backgroundColor: '#F4F0E8' }} >
                    <Col>
                        <div className='container px-5' >
                            <br />
                            <h1>Home Loan</h1>
                            <h5>There are hundreds of options on where you can get a mortgage.You can get a mortgage through a credit union, bank, mortgage-specific lender, online-only lender, or mortgage broker. No matter which option you choose, compare rates across types to make sure that you’re getting the best deal.</h5>
                            <Button size="lg" className='my-4'>Go to At a Glance</Button>
                        </div>

                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-center' >
                            <Image
                                src={Home}

                                alt="contact us"
                            //   rounded
                            // roundedCircle
                            />
                        </div>
                    </Col>
                </Row>
    </Container>


     <Footer style={{ backgroundColor: '#A58CC3​' }} />


        </div>
    )
}

export default AboutUs;
