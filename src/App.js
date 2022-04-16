import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./pages/Header/Header"
import Home from "./pages/Home/Home"
import Login from "./pages/LoginAndRegister/Login/Login"
import Register from "./pages/LoginAndRegister/Register/Register"
import RequireAuth from "./pages/RequireAuth/RequireAuth"
import Room from "./pages/Room/Room"
import NotFound from "./pages/SharedPages/NotFound/NotFound"
function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route
					path="/room"
					element={
						<RequireAuth>
							<Room></Room>
						</RequireAuth>
					}
				></Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
