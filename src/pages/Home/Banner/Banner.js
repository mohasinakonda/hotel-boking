import React from "react"
import { Carousel } from "react-bootstrap"
import badimg1 from "../../../assets/images/badroom1.jpg"
import badimg2 from "../../../assets/images/badroom2.jpg"
import badimg3 from "../../../assets/images/badroom3.png"

const Banner = () => {
	return (
		<Carousel className="m-5">
			<Carousel.Item>
				<img className="d-block w-100 h-50" src={badimg1} alt="First slide" />
				<Carousel.Caption>
					<h3>single room</h3>
					<p>single room for create mingle</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 h-50 " src={badimg2} alt="Second slide" />

				<Carousel.Caption>
					<h3>Select your Rooms </h3>
					<p>this is more convanint for your family and your comfort zone</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 h-50" src={badimg3} alt="Third slide" />

				<Carousel.Caption>
					<h3>Doot Room</h3>
					<p>Love it for your family ,just awesome</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default Banner
