import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartWidget from "../CartWidget/CartWidget";
import LogoEpikus from "../../Img/logosEpikus/epikusFondoBlanco100X100.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Navbar key={"expand"}  expand={"md"} >
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}/>
                    <Navbar.Brand href="#"><img className="header__logo" src={LogoEpikus} alt="LogoEpikus" /></Navbar.Brand>
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            Epikus Cake
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3 gap-md-5">
                                {/* <Nav.Link href="/Inicio">Inicio</Nav.Link> */}
                                <Nav.Link><Link to="/Inicio">Inicio</Link></Nav.Link>
                                <NavDropdown
                                    title="Productos"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                    {/* <NavDropdown.Item href="/Pasteleria">Pastelería</NavDropdown.Item> */}
                                    <NavDropdown.Item><Link to="/Pasteleria">Pastelería</Link></NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/Tortas">Tortas</NavDropdown.Item> */}
                                    <NavDropdown.Item><Link to="/Tortas">Tortas</Link></NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="/Nosotros">Nosotros</Nav.Link> */}
                                <Nav.Link><Link to="/Nosotros">Nosotros</Link></Nav.Link>
                                {/* <Nav.Link href="/Contacto">Contacto</Nav.Link> */}
                                <Nav.Link><Link to="/Contacto">Contacto</Link></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand href="#"><CartWidget/></Navbar.Brand>
                    <Navbar.Brand href="#"><img className="logo" src={LogoEpikus} alt="LogoEpikus" /></Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
}
export default NavBar;
