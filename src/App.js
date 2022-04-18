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
				></Route>
				<Route path="services" element={<Services></Services>}>
					<Route path="family" element={<Familyroom />}></Route>
					<Route path="couple" element={<CoupleRoom />}></Route>
					<Route path="single" element={<Singleroom />}></Route>
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
