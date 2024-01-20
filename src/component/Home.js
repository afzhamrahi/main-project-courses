import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
export default function Home() {

  return (
    <Container className="mt-2">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">SabzLearn</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{marginLeft:35,color:"#fff"}}>Home</Link>
            <Link to="/courses" style={{marginLeft:35,color:"#fff"}}>Courses</Link>
            <Link to="/About" style={{marginLeft:35,color:"#fff"}}>About</Link>
            <Link to="/AdminPanel" style={{marginLeft:35,color:"#fff"}}>Admin panel</Link>

          </Nav>
        </Container>
      </Navbar>
    </Container>

  )
}



