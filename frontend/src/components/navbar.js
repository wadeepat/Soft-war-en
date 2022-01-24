import {Nav,Navbar, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'


const MyNavbar = () => { 
    return (
        <div>
           <Navbar className="navBar "  fixed="top"  expand="lg"  >
             <Navbar.Brand>
               <img src="/logo512.png" height="40" width="40"></img>
              <span className="logo-name">SOFT(WAR)EN</span>
             </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                <Nav className="nav">
                <Nav.Link href="/upload">Upload</Nav.Link>
                <Nav.Link href="/edit">Edit</Nav.Link>
                <Nav.Link href="/download">Download</Nav.Link>
                <form class="d-flex">
                  <input class="form-control me-2" type="text" placeholder="Search"/>
                  <button class="btn btn-outline-light" type="button">Search</button>
                </form>
              </Nav>
              </Navbar.Collapse>
           </Navbar>
           
        </div>
      );
}

export default MyNavbar;

/* origin version
const MyNavbar = () => { 
    return (
        <div>
           <Navbar className="navBar"  fixed="top"  expand="lg" bg="light" >
             <Navbar.Brand>
               <img src="/logo512.png" height="40" width="40"></img>
              SOFT(WAR)EN
             </Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                <Nav className="nav">
                <NavDropdown title="page0">
                  <NavDropdown.Item href="/page1/something1">sth 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page1/something2">sth 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/page1/something3">sth 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/upload">Upload</Nav.Link>
                <Nav.Link href="/edit">Edit</Nav.Link>
                <Nav.Link href="/download">Download</Nav.Link>
                <Nav.Link href="/page4">Page4</Nav.Link>
                <Nav.Link href="/posts">Page5</Nav.Link>
                <form class="d-flex">
                  <input class="form-control me-2" type="text" placeholder="Search"/>
                  <button class="btn btn-outline-success" type="button">Search</button>
                </form>
              </Nav>
              </Navbar.Collapse>
           </Navbar>
           
        </div>
      );
}*/