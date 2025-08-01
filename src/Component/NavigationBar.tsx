
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';
 
const NavigationBar = () => {
  return (
    <>
    <div style={{ paddingTop: '100px' }}>
    <Navbar expand="lg"   variant="dark" 
      className="navbar-glass py-3 px-3 rounded-pill mx-auto mt-3 fixed-top"
      style={{ maxWidth: '1200px' }}> 
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '32px', height: '32px', fontWeight: 'bold' }}>
            EA
          </div>
          <span className="fw-semibold">My Portfolio</span>
        </Navbar.Brand>
 
        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />
 
        {/* Nav links */}
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="mx-auto text-center">
            <Nav.Link href="#Header">Home</Nav.Link>
            <Nav.Link href="/About.html">About</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
};
 
export default NavigationBar;