import React from "react"
import logo from "../../../assets/images/logo/google.png"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from "../../../firebase.config"

const LoginWithGoogle = () => {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
	const googleSignIn = () => {
		signInWithGoogle()
	}
	return (
		<div>
			<div className="d-flex align-items-center">
				<p style={{ height: "2px", width: "40%", backgroundColor: "gray" }}></p>
				<p>or</p>
				<p style={{ height: "2px", width: "40%", backgroundColor: "gray" }}></p>
			</div>
			<button onClick={googleSignIn} className="btn btn-warning w-100">
				<img style={{ width: "30px", margin: "5px" }} src={logo} alt="" />
				sign in Google
			</button>
		</div>
	)
}

export default LoginWithGoogle
