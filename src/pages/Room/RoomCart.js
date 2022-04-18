import React from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import useRooms from "../../utilitise/hooks/useRooms"

const RoomCart = ({ room }) => {
	const { img, description, name, id } = room
	const [rooms] = useRooms()
	const navigate = useNavigate()
	const roomsDetails = (id) => {
		navigate(`checkout/${id}`)
	}
	return (
		<Card className="col-4">
			<Card.Img variant="top" className="h-100 shadow-lg" src={img} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text className="my-3 py-2">{description}</Card.Text>
				<Button
					onClick={() => roomsDetails(id)}
					className="bg-warning position-absolute bottom-0 w-50 d-block mx-auto"
					variant="primary"
				>
					checkout
				</Button>
			</Card.Body>
		</Card>
	)
}

export default RoomCart
