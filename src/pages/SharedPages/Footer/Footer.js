import React from "react"

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<div className=" d-flex justify-content-center bg-dark">
			<p className="text-light">copyright &copy;2017-{year} </p>
		</div>
	)
}

export default Footer
