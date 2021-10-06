import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header(props) {
  const { currentPath } = props;

  const links = {
    Home: "/",
    About: "/about",
    Services: "/services",
    Contact: "/contact",
  };

  function getLinksFromEntries(entry) {
    let name = entry[0];
    let path = entry[1];
    let active = path === currentPath ? " active" : "";

    return (
      <Nav.Link className={"nav-link" + active} href={"/#" + path}>
        {name}
      </Nav.Link>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="images/logo.png" width="110" height="125" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.entries(links).map(getLinksFromEntries)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
