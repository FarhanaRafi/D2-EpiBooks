import { Navbar, Nav } from 'react-bootstrap'


const MyNav = (props) => {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home" className='ml-4'>Epi-Books - {props.genre} </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto mr-4">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default MyNav