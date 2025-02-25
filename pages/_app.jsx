import "bootstrap/dist/css/bootstrap.css";
import "../styles/Home.module.css";
import "../styles/globals.css";

import Head from "next/head";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="nav">
        <Container>
          <Navbar variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref legacyBehavior>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href="/about" passHref legacyBehavior>
                  <Nav.Link>About</Nav.Link>
                </Link>
                <Link href="/projects" passHref legacyBehavior>
                  <Nav.Link>Projects</Nav.Link>
                </Link>
                <Link href="/contact" passHref legacyBehavior>
                  <Nav.Link>Contact</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
