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
          <Navbar variant="dark">
            <Nav>
              <Link href="/">
                <a className="nav-link light">Home</a>
              </Link>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
              <Link href="projects">
                <a className="nav-link"> Projects</a>
              </Link>
              <Link href="contact">
                <a className="nav-link">Contact</a>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
