import React from "react"
import myimg from "../../assets/images/myself.jpg"

const AboutMe = () => {
	return (
		<div className="container d-flex pt-5">
			<div className="d-flex justify-content-center">
				<img className="w-100 rounded-circle" src={myimg} alt="" />
			</div>
			<div>
				<h2>This is Mohaisn akonda</h2>
				<p>
					I am a talented, ambitious and hardworking individual, with broad
					skills and experience in web app development on reactjs, social media
					and leading projects. Furthermore, I am adept at handling multiple
					tasks on a daily basis competently and at working well under pressure.
					A key strength is communication; building strong relationships with
					people in order to deliver the best results. Recently, I completed an
					course on <b>programming hero</b>, including frontend web development
					course and I am now fully employed by Clearly Presented as a web
					developer.
				</p>
			</div>
		</div>
	)
}

export default AboutMe
