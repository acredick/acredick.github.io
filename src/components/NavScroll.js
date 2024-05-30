// src/components/NavScroll.js

import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/NavScroll.css"
import { NavLink, NavbarBrand } from "react-bootstrap";

export default function NavScroll() {
    return (


        <div id="nav-container">
            <div class="brand-container">
                <a class="brand" href="/">Auria Redick</a>
            </div>

            <Navbar expand="lg">
                <Container>
                    <Nav.Link href="/past-work">01. Past Work</Nav.Link>
                </Container>

                <Container >
                    <Nav.Link href="/skills">
                        02. Skills
                    </Nav.Link>
                </Container>

                <Container>
                    <Nav.Link href="/about">
                        03. About
                    </Nav.Link>
                </Container>

                <Container>
                    <Nav.Link href="/contact">04. Contact</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
}
