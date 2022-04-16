import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	const confirmPasswordHandler = (e) => {
		setConfirmPassword(e.target.value)
	}
	return (
		<div>
			<form>
				<label htmlFor="email"></label>
				<input onBlur={emailHandler} type="email" name="email" id="" required />
				<label htmlFor="password">Password</label>
				<input
					onBlur={passwordHandler}
					type="password"
					name="password"
					id=""
					required
				/>
				<label htmlFor="password">confirm Password</label>
				<input
					onBlur={confirmPasswordHandler}
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
				Need an account?<Link to="/signup">Sign up</Link>
			</p>
		</div>
	)
}

export default Login
