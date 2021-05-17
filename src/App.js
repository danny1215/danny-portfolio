import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './components/footer';
import  HomePage from './pages/homePage';
import  PortfolioPage from './pages/portfolioPage';
import  ContactPage from './pages/contactPage'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Daniel Mestawat',
      headerLinks: [
        {title: 'About', path:'/'},
        {title: 'Portfolio', path:'/portfolio'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'About Me',
        text: 'paragraph of me'
      },
      Portfolio: {
        title: 'Portfolio'
      },
      contact: {
        text: 'contact me'
      },
    }
  }

render() {
  return (
    <Router>
      <Container className='p-0' fluid={true}>
      <Navbar className='border-bottom' bg='transparent' expand='lg'>
        <Navbar.Brand>Daniel Mestawat</Navbar.Brand>

        <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
        <Navbar.Collapse id='navbar-toggle'>
          
          <Nav className='ml-auto'>
            <Link className='nav-Link' to='/'>Home</Link>
            <Link className='nav-Link' to='/portfolio'>Portfolio</Link>
            <Link className='nav-Link' to='/contact'>Contact</Link>

                
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Route path='/' exact render={() => <HomePage title={this.state.home.title} text={this.state.home.text}/>}/> 
        <Route path='/portfolio' exact render={() => <PortfolioPage title={this.state.Portfolio.title}/>}/> 
        <Route path='/contact' exact render={() => <ContactPage text={this.state.contact.text} />}/>     
        <Footer/>
      </Container>
      
      
    </Router>
  );
}
}

export default App;
