import React from "react"
import useRooms from "../../utilitise/hooks/useRooms"
import RoomCart from "./RoomCart"

const Room = () => {
	const [rooms] = useRooms()
	return (
		<div className="row g-5 ">
			{rooms.map((room) => (
				<RoomCart key={room.id} room={room}></RoomCart>
			))}
		</div>
	)
}

export default Room
