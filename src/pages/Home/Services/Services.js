import React from "react"
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom"
import Room from "../../Room/Room"
import CoupleRoom from "../RoomService/CoupleRoom"
import Familyroom from "../RoomService/Familyroom"
import Singleroom from "../RoomService/Singleroom"

const Services = () => {
	return (
		<div className="container">
			<h2>our Services</h2>
			<nav>
				<NavLink to="single">single room</NavLink>
				<NavLink to="family">family room</NavLink>
				<NavLink to="couple">couple room</NavLink>
			</nav>
			<Room></Room>
			{/* <Outlet> */}
		</div>
	)
}

export default Services
