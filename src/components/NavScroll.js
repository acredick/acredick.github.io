// src/components/NavScroll.js

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavScroll.css"

export default function NavScroll() {
    return (


        <div id="nav-container">
            <div class="brand-container">
                <a class="brand" href="/">Auria Redick</a>
            </div>

            <Navbar expand="lg">
                <Container>
                    <Nav.Link href="/past-work">01. Projects</Nav.Link>
                </Container>

                <Container >
                    <Nav.Link href="/experience">
                        02. Experience
                    </Nav.Link>
                </Container>

                <Container>
                    <Nav.Link href="/contact">03. Contact</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}
