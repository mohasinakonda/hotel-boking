import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom"
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
	const [user, loading] = useAuthState(auth)
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
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button className="w-100" variant="warning" type="submit">
					Submit
				</Button>
			</Form>
			<LoginWithGoogle></LoginWithGoogle>
		</div>
	)
}

export default Login
