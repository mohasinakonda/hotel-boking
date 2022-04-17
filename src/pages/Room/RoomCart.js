import React from "react"
import { Button, Card } from "react-bootstrap"

const RoomCart = ({ room }) => {
	return (
		<Card className="col-4">
			<Card.Img variant="top" className="h-100 shadow-lg" src={room.img} />
			<Card.Body>
				<Card.Title>{room.name}</Card.Title>
				<Card.Text>{room.description}</Card.Text>
				<Button variant="primary">checkout</Button>
			</Card.Body>
		</Card>
	)
}

export default RoomCart
