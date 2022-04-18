import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRooms from "../../../utilitise/hooks/useRooms"

const CheckoutDetails = () => {
	// const [rooms] = useRooms()

	const [rooms, setRooms] = useState([])
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setRooms(data))
	}, [])
	console.log(rooms)
	const paramsId = useParams()

	const room = rooms.find((room) => room.id === paramsId.roomId)
	console.log(room)
	return (
		<div>
			<h2>please confirm Your booking</h2>
			{/* <p>{room.name}</p> */}
		</div>
	)
}

export default CheckoutDetails
