import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import '../Asset/Design.css'

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            text: "Home",
            color: "light",
            style: "green",
            font: "bold"
        }
    }
    render() {

        return (
            <React.Fragment>

                {/* <h1 onClick={()=> this.setState({style: "blue"})} style={{ color: this.state.style }}>Home</h1> */}

                {/* <Navbar bg="info" variant="dark" className=" fixed-top">
                    <Navbar.Brand className=" ml-md-5" style={{color: this.state.color,fontWeight: this.state.font}}>ReactJs Coder</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link style={{fontWeight: this.state.font}}  eventKey={1} as={Link} to="/">{this.state.text}</Nav.Link>
                        <Nav.Link style={{fontWeight: this.state.font}} className="navHover"  eventKey={2} as={Link} to="/about">About</Nav.Link>
                        <Nav.Link style={{fontWeight: this.state.font}} className=" mr-sm-5"  eventKey={3} as={Link} to="/contact">News</Nav.Link>
                    </Nav>    
                </Navbar> */}

                <Navbar bg="info" expand="lg" variant="dark">
                    <Navbar.Brand as={Link} to="/">ReactJs Coder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} eventKey={1} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} eventKey={3} to="/contact">News</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </React.Fragment>
        );
    }
}

export default Navigation;