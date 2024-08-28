
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink } from 'react-router-dom';
import './MyNavbar.css'

function MyNavbar(){
    const expand= 'lg'
   
    return(
        <Navbar expand={expand} className="navbar-overlay">
        <Container >
          <Navbar.Brand className='navbar-brand' >UpConstruction<span style={{color:'#feb900'}}>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/' className='nav-link'>HOME</NavLink>
                <NavLink to='/about' className='nav-link'>ABOUT</NavLink>
                <NavLink to='/services' className='nav-link'>SERVICES</NavLink>
                <NavLink to='/projects' className='nav-link'>PROJECTS</NavLink>
                <NavLink to='/blog' className='nav-link'>BLOG</NavLink>
                <NavLink to='/contact' className='nav-link'>CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    )
}
export default MyNavbar