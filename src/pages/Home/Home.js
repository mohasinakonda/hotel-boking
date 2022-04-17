import React from "react"
import Footer from "../SharedPages/Footer/Footer"
import Banner from "./Banner/Banner"
import Services from "./Services/Services"

const Home = () => {
	return (
		<div className="container">
			<Banner></Banner>
			<Services></Services>
			<Footer></Footer>
		</div>
	)
}

export default Home
