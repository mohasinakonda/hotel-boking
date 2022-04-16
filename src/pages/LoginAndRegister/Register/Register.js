import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import auth from "../../../firebase.config"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState({
		email: "",
		password: "",
	})

	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth)
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	const confirmPasswordHandler = (e) => {
		setConfirmPassword(e.target.value)
	}
	const submitHandler = (event) => {
		event.preventDefault()
		if (password === confirmPassword) {
			setPassword(password)
			createUserWithEmailAndPassword(email, password).then((result) => {
				const userInfo = result.user
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
				<br />
				<label htmlFor="password">Password</label>
				<input
					onChange={passwordHandler}
					type="password"
					name="password"
					id=""
					required
				/>
				<br />]<label htmlFor="password">confirm Password</label>
				<input
					onChange={confirmPasswordHandler}
					type="password"
					name="password"
					id=""
					required
				/>
				<label htmlFor="checkbox">Show password</label>
				<input type="checkbox" name="checkbox" id="" />
				<input type="submit" value="Sign up" />
			</form>
			<p>
				Already have an account?<Link to="/login">Sign in</Link>
			</p>
		</div>
	)
}

export default Login
