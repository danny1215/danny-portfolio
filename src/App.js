import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
// import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './components/footer';
import  HomePage from './pages/homePage';
import  AboutPage from './pages/aboutPage';
import  ContactPage from './pages/contactPage'




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Daniel Mestawat',
      headerLinks: [
        {title: 'Home', path:'/'},
        {title: 'About', path:'/about'},
        {title: 'Contact', path:'/contact'}
      ],
      home: {
        title: 'portofolio',
        text: 'home'
      },
      about: {
        text: 'about me'
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
            <Link className='nav-Link' to='/about'>About</Link>
            <Link className='nav-Link' to='/contact'>Contact</Link>

                
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <Route path='/' exact render={() => <HomePage title={this.state.home.title} text={this.state.home.text}/>}/> 
        <Route path='/about' exact render={() => <AboutPage text={this.state.about.text}/>}/> 
        <Route path='/contact' exact render={() => <ContactPage text={this.state.contact.text} />}/>     
        <Footer/>
      </Container>
      
      
    </Router>
  );
}
}

export default App;
