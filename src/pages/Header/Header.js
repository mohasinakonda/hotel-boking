import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="d-flex">
			<p>Grand Hotel</p>
			<div>
				<Link to="/">Home</Link>
				<Link to="/room">Room</Link>
				<Link to="/login">Login</Link>
			</div>
		</div>
	)
}

export default Header
