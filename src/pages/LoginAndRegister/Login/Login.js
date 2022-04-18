import { signInWithEmailAndPassword, updateEmail } from "firebase/auth"
import React, { useState } from "react"
import { Button, Form, Spinner } from "react-bootstrap"
import {
	useAuthState,
	useSendPasswordResetEmail,
	useUpdatePassword,
} from "react-firebase-hooks/auth"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle"
import auth from "../../../firebase.config"
import { toast } from "react-toastify"
import Spiner from "../../SharedPages/Spiner/Spinner"
const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [user, loading] = useAuthState(auth, {})
	const location = useLocation()
	const [sendPasswordResetEmail, sending, error] =
		useSendPasswordResetEmail(auth)
	const navigate = useNavigate()
	const from = location.state?.from?.pathname || "/"

	// const [error, setError] = useState({
	// 	email: "",
	// 	password: "",
	// })

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	if (user) {
		navigate(from, { replace: true })
	}

	const submitHandler = (event) => {
		event.preventDefault()

		signInWithEmailAndPassword(auth, email, password).then((result) => {
			const user = result.user
		})
	}

	if (loading || sending) {
		return <Spiner></Spiner>
	}
	const updatePasswordHandle = async () => {
		await sendPasswordResetEmail(email)
		toast("Email send for update password!")
	}

	return (
		<div className="w-25 mx-auto">
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
						onChange={passwordHandler}
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="show password" />
				</Form.Group>
				<Button className="w-100" variant="warning" type="submit">
					Submit
				</Button>
			</Form>
			<p className="py-3">
				Need have an account?
				<Link
					className="text-decoration-none text-warning fs-lg"
					to="/register"
				>
					sign up
				</Link>
			</p>
			<p>
				Forget password?
				<button
					onClick={updatePasswordHandle}
					className="border-0 bg-warning px-2 mx-2 rounded"
				>
					Reset
				</button>
			</p>
			<LoginWithGoogle></LoginWithGoogle>
		</div>
	)
}

export default Login
