// src/components/NavScroll.js

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavScroll.css"

export default function NavScroll() {
    return (


        <div id="nav-container">

            <Navbar expand="lg">
                <Container>
                    <Nav.Link href="/">home</Nav.Link>
                </Container>

                <Container>
                    <Nav.Link href="/projects">projects</Nav.Link>
                </Container>

                <Container >
                    <Nav.Link href="/experience">
                        experience
                    </Nav.Link>
                </Container>

                <Container>
                    <Nav.Link href="/contact">contact</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}
