import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import useRooms from "../../../utilitise/hooks/useRooms"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const CheckoutDetails = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rooms] = useRooms()
	const navigate = useNavigate()

	const { roomId } = useParams()
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
	}
	const handleBooking = () => {
		toast("your room is successfully booked!!")
		navigate("/")
	}
	return (
		<div className="w-25 mx-auto">
			<h2>please confirm Your booking</h2>
			<Form onSubmit={handleBooking}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Enter name</Form.Label>
					<Form.Control required type="text" placeholder="Enter name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control required type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>phone Number</Form.Label>
					<Form.Control required type="text" placeholder="phone number" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Address</Form.Label>
					<Form.Control type="text" placeholder="address" />
				</Form.Group>

				<Button className="w-100" variant="warning" type="submit">
					Submit
				</Button>
			</Form>
			<ToastContainer />
		</div>
	)
}

export default CheckoutDetails
