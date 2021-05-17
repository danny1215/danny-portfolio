import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footer from './footer.css'


function Footer() {

    return(
        <footer className='mt-5'>
        <Container fluid={true}> 
        {/* <Row className='border-top justify-content-between p-3'> */}
        <Col className='foot'>
            <span>Daniel Mestawat &copy; 2021 all rights reserved!</span>
            </Col>
           
{/*             
        </Row> */}
        </Container>
    </footer> 
    )
    
}

export default Footer;