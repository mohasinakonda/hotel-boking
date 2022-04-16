import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, Navigate } from "react-router-dom"
import auth from "../../../firebase.config"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [user] = useAuthState(auth)

	const [error, setError] = useState({
		email: "",
		password: "",
	})

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (user) {
			signInWithEmailAndPassword(auth, email, password).then((data) => {
				const user = data.user
			})
		}
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<label htmlFor="email"></label>
				<input
					onChange={emailHandler}
					type="email"
					name="email"
					id=""
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={passwordHandler}
					type="password"
					name="password"
					id=""
					required
				/>
				<label htmlFor="password">confirm Password</label>

				<label htmlFor="checkbox">Show password</label>
				<input type="checkbox" name="checkbox" id="" />
				<input type="submit" value="Sign up" />
			</form>
			<p>
				Need an account?<Link to="/register">Sign up</Link>
			</p>
		</div>
	)
}

export default Login
