import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"
import auth from "../../../firebase.config"

const CheckOut = () => {
	const [user] = useAuthState(auth)
	if (!user) {
		return <Navigate to="/login"></Navigate>
	}
	return (
		<div>
			<h2>Room details</h2>
		</div>
	)
}

export default CheckOut
