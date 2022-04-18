import { signOut } from "firebase/auth"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"
import auth from "../../firebase.config"

const Header = () => {
	const [user] = useAuthState(auth)
	const handleSignOut = () => {
		signOut(auth)
	}
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
						<Nav.Link as={Link} to="/checkout">
							Checkout
						</Nav.Link>

						<Nav.Link as={Link} to="/rooms">
							Rooms
						</Nav.Link>
						<Nav.Link as={Link} to="/blogs">
							Blogs
						</Nav.Link>
					</Nav>
					{!user ? (
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
					) : (
						<button
							className="border-0 rounded bg-warning"
							onClick={handleSignOut}
							as={Link}
						>
							LogOut
						</button>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
