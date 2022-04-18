import React from "react"

const Blogs = () => {
	return (
		<div className="container">
			<div>
				<img
					className="w-100"
					src="https://cdn-bpplm.nitrocdn.com/MJefRwORvlGzblepEIRIgrqQFCGliGiG/assets/static/optimized/rev-458013f/wp-content/uploads/2018/02/security-authentication-user-authorization-websites-700x298.png"
					alt=""
				/>
			</div>
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
			<h3>Authentication</h3>
			<ul>
				<li>Authentication verifies who the user is.</li>
				<li>
					Authentication works through passwords, one-time pins, biometric
					information, and other information provided or entered by the user.
				</li>
				<li>
					Authentication is the first step of a good identity and access
					management process.
				</li>
				<li>
					Authentication is visible to and partially changeable by the user.
				</li>
			</ul>
			<h3>Authorization</h3>
			<ul>
				<li>Authorization determines what resources a user can access.</li>
				<li>
					Authorization works through settings that are implemented and
					maintained by the organization.
				</li>
				<li>Authorization always takes place after authentication.</li>
				<li>Authorization isn’t visible to or changeable by the user.</li>
			</ul>
			<hr />
			<div className="pt-5">
				<img
					className="w-100"
					src="https://blog.back4app.com/wp-content/uploads/2018/01/Firebase-Alternatives-1.jpg"
					alt=""
				/>
			</div>
			<h2 className="pt-4">
				Why are you using firebase? What other options do you have to implement
				authentication?
			</h2>
			<p>
				Firebase can be seen as a server-less backend for your mobile apps, web
				apps, etc. It is a service provided by Google. As an Android developer I
				use Firebase in most of my projects. It has many features like Realtime
				database, Cloud functions, Analytics, Crashlytics, Cloud Fire store,
				etc. Firebase can be used when you do not want to spend a lot of time
				developing your own backend. It can be used for rapid development. I
				have been using it in my apps in production. You will not have to take
				care of servers, etc, Google will take care of it for you. If you do not
				find the need to develop your own backend, Firebase is one of the best
				option
			</p>
			<h3>Alternative of firebase</h3>
			<ol>
				<li>Back4App</li>
				<li>Parse</li>
				<li>AWS Amplify</li>
				<li>Backendless</li>
				<li>Kuzzle</li>
				<li>Supabase</li>
				<li>appwrite</li>
				<li>Hasura</li>
				<li>Nhost</li>
				<li>Deployd</li>
			</ol>
			<hr />
			<div className="pt-5">
				<img
					src="https://miro.medium.com/max/1400/1*nfxNzW9HtplD2n9C2aqM9w.png"
					alt=""
				/>
			</div>
			<h2>Why are you using firebase?</h2>
			<p>
				Firebase is a NoSQL cloud database. A NoSQL database provides a
				mechanism for storage and retrieval of data that is modeled in means
				other than the tabular relations used in relational databases. The
				Firebase Realtime Database is a cloud-hosted database. Data is stored as
				JSON and synchronized in realtime to every connected client. Since you
				particularly asked for Firebase Database, I would be focusing on that
				only from many features of the Firebase.
			</p>
			<h3>Other service of firebase</h3>
			Cloud Messaging (FCM) Storage Hosting Cloud Functions Crashalytics
			Performance Monitoring Test Lab Crash Reporting Predictions Remote Config
			Dynamic Links App Indexing AdWords
			<ol>
				<li>Authentication</li>

				<li>Cloud Firestore</li>
				<li>Storage</li>
				<li>Hosting</li>
				<li>Cloud Function</li>
				<li>Crashalytics</li>
				<li>Performance Monitoring</li>
				<li>Test Lab</li>
				<li>Remote Config</li>
				<li>AdWords</li>
			</ol>
		</div>
	)
}

export default Blogs
