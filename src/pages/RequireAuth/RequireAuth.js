import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../firebase.config"

const RequireAuth = ({ children }) => {
	const location = useLocation()
	if (!auth.user) {
		;<Navigate to="/allrooms" state={{ from: location }} replace></Navigate>
	}
	return children
}

export default RequireAuth
