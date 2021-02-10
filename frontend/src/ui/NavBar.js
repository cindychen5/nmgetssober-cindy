import React from "react"
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./index.css"
import {NavDropdown} from "react-bootstrap";

export const NavBar = () => {
    return (
        <>
            <Navbar id="yellow" expand="lg" className="border border-dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">Map</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Sign Up</Nav.Link>
            {/*<NavDropdown title="Sign Up" id="basic-nav-dropdown">*/}
            {/*    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>*/}
            {/*    <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>*/}
            {/*</NavDropdown>*/}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
