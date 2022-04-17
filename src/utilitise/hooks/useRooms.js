import React, { useEffect, useState } from "react"

const useRooms = () => {
	const [rooms, setRooms] = useState([])
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((room) => setRooms(room))
	}, [])
	return [rooms]
}

export default useRooms
