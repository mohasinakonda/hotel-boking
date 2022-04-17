import React from "react"
import { Carousel } from "react-bootstrap"

const Banner = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIdrOkRyAXOcgBsppOw9pm3BqxSddauu56niRp8cUHOVglXLRjPcEH_CSeodP_VVchdM&usqp=CAU"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIdrOkRyAXOcgBsppOw9pm3BqxSddauu56niRp8cUHOVglXLRjPcEH_CSeodP_VVchdM&usqp=CAU"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIdrOkRyAXOcgBsppOw9pm3BqxSddauu56niRp8cUHOVglXLRjPcEH_CSeodP_VVchdM&usqp=CAU"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default Banner
