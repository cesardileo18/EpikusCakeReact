import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartWidget from "../CartWidget/CartWidget";
import LogoEpikus from "../../Img/logosEpikus/epikusFondoBlanco100X100.png"
import "../../Scss/components/navbar.scss"

const NavBar = () => {
    return (
        <header>
            <Navbar key={"expand"}  expand={"md"} className="mb-3">
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
                                <Nav.Link href="/EpikusCakeReact/Inicio">Inicio</Nav.Link>
                                <NavDropdown
                                    title="Productos"
                                    id={`offcanvasNavbarDropdown-expand-md`}
                                >
                                    <NavDropdown.Item href="/EpikusCakeReact/Pasteleria">Pastelería</NavDropdown.Item>
                                    <NavDropdown.Item href="/EpikusCakeReact/Tortas">
                                    Tortas
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/EpikusCakeReact/Nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="/EpikusCakeReact/Contacto">Contacto</Nav.Link>
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
