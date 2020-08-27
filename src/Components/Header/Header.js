import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia,faHome,faComment } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button} from '../../../node_modules/react-bootstrap';
import logo from '../../images/f_logo_icon_124331.png'
const Header = () => {
    return (
        <React.Fragment>
        <div>
            <img className='header-img' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e0ff971135469.5bbb682004c89.png" alt=""/>
        
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
      <Nav.Link href="#link"><FontAwesomeIcon icon={faGlobeAsia} /> Notifications</Nav.Link>
       <NavDropdown title="Masseges" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
        </React.Fragment>
    );
};

export default Header;