import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from '../components/footer'
import Link from 'next/link'


const Layout = ({children}) => {
  return (
    <>
      <div className="min-vh-100 bg-grad">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand>Benjamin Henning</Navbar.Brand>
          <Nav className="d-inline d-lg-none">
            <Link href="https://github.com/bhenning2556" target="_blank"><i className="fab fa-github pr-4" style={{fontSize: "28px"}}></i></Link>
            <Link href="https://www.linkedin.com/in/benjaminmhenning/" target="_blank"><i className="fab fa-linkedin pr-4" style={{fontSize: "28px"}}></i></Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/" passHref><Nav.Link><i className="fas fa-home"></i> Home</Nav.Link></Link>
              <Link href="/projects" passHref><Nav.Link><i className="far fa-file-code"></i> Projects</Nav.Link></Link>
              <Link href="/contact" passHref><Nav.Link><i className="far fa-user"></i> Contact</Nav.Link></Link>
              <Link href="/blog" passHref><Nav.Link><i className="fas fa-edit"></i> Blog</Nav.Link></Link>
            </Nav>
            <Nav className="d-none d-lg-inline">
              <Link href="https://github.com/bhenning2556" target="_blank"><i className="fab fa-github pr-4" style={{fontSize: "28px"}}></i></Link>
              <Link href="https://www.linkedin.com/in/benjaminmhenning/" target="_blank"><i className="fab fa-linkedin pr-4" style={{fontSize: "28px"}}></i></Link>
            </Nav>
            
          </Navbar.Collapse>
          
        </Navbar>

        <main>{ children }</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout