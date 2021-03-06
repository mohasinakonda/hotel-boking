import React from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import Header from "./pages/Header/Header"
import Home from "./pages/Home/Home"
import Login from "./pages/LoginAndRegister/Login/Login"
import Register from "./pages/LoginAndRegister/Register/Register"
import RequireAuth from "./pages/RequireAuth/RequireAuth"
import Room from "./pages/Room/Room"
import Services from "../src/pages/Home/Services/Services"

import NotFound from "./pages/SharedPages/NotFound/NotFound"
import Familyroom from "./pages/Home/RoomService/Familyroom"
import CoupleRoom from "./pages/Home/RoomService/CoupleRoom"
import Singleroom from "./pages/Home/RoomService/Singleroom"
import CheckOut from "./pages/SharedPages/CheckOut/CheckOut"
import CheckoutDetails from "./pages/SharedPages/CheckoutDetails/CheckoutDetials"
import Blogs from "./pages/Blogs/Blogs"
import AboutMe from "./pages/AboutMe/AboutMe"
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="checkout"
					element={
						<RequireAuth>
							<CheckOut></CheckOut>
						</RequireAuth>
					}
				></Route>{" "}
				<Route
					path="checkout/:roomId"
					element={
						<RequireAuth>
							<CheckoutDetails></CheckoutDetails>
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/aboutme" element={<AboutMe />} />
				<Route path="/register" element={<Register />} />
				<Route path="checkout/:roomId" element={<CheckoutDetails />}></Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
