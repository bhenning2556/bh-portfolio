import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Footer from '../components/footer'
import Link from 'next/link';


const Layout = ({children}) => {
  return (
    <>
      <div className="min-vh-100">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Benjamin Henning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/" passHref><Nav.Link><i class="fas fa-home"></i> Home</Nav.Link></Link>
              <Link href="/projects" passHref><Nav.Link><i class="far fa-file-code"></i> Projects</Nav.Link></Link>
              <Link href="/contact" passHref><Nav.Link><i class="far fa-user"></i> Contact</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <main>{ children }</main>

      </div>

      <Footer />

    </>
  )
}

export default Layout