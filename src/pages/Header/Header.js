import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">Square Room</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/rooms">
							Rooms
						</Nav.Link>
						<Nav.Link as={Link} to="/blogs">
							Blogs
						</Nav.Link>
					</Nav>
					<Nav.Link as={Link} to="/login">
						Login
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
