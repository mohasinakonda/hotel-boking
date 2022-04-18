import React from "react"

const Blogs = () => {
	return (
		<div>
			<h2> Difference between authorization and authentication</h2>
			<p>
				While authentication and authorization are often used interchangeably,
				they are separate processes used to protect an organization from
				cyber-attacks. As data breaches continue to escalate in both frequency
				and scope, authentication and authorization are the first line of
				defense to prevent confidential data from falling into the wrong hands.
				As a result, strong authentication and authorization methods should be a
				critical part of every organization’s overall security strategy.
			</p>
			<p>
				So, what is the difference between authentication and authorization?
				Simply put, authentication is the process of verifying who someone is,
				whereas authorization is the process of verifying what specific
				applications, files, and data a user has access to. The situation is
				like that of an airline that needs to determine which people can come on
				board. The first step is to confirm the identity of a passenger to make
				sure they are who they say they are. Once a passenger’s identity has
				been determined, the second step is verifying any special services the
				passenger has access to, whether it’s flying first-class or visiting the
				VIP lounge. In the digital world, authentication and authorization
				accomplish these same goals. Authentication is used to verify that users
				really are who they represent themselves to be. Once this has been
				confirmed, authorization is then used to grant the user permission to
				access different levels of information and perform specific functions,
				depending on the rules established for different types of users.
			</p>
		</div>
	)
}

export default Blogs
