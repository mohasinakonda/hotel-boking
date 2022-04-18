import React, { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth"
import auth from "../../../firebase.config"
import { Button, Form } from "react-bootstrap"
import Spiner from "../../SharedPages/Spiner/Spinner"
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [user, loading, error] = useAuthState(auth)
	const navigate = useNavigate()

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
	let handleError
	if (error) {
		handleError = error.message
		console.log(error.message)
	}
	if (user) {
		return <Navigate to="/"></Navigate>
	}
	const submitHandler = (event) => {
		event.preventDefault()
		if (password === confirmPassword) {
			setPassword(password)
			createUserWithEmailAndPassword(email, password).then((result) => {
				const userInfo = result?.user
			})
		}
		navigate("/login")
	}
	return (
		<div className="w-25  mx-auto">
			<h1>Please Register !</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={emailHandler}
						type="email"
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={confirmPasswordHandler}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={passwordHandler}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>

				<Button className="w-100" variant="warning" type="submit">
					Submit
				</Button>
			</Form>
			<p>{handleError}</p>

			<LoginWithGoogle></LoginWithGoogle>
		</div>
	)
}

export default Login
