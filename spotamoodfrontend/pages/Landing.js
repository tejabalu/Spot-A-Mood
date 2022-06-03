import React, { useContext } from "react";
import { SpotifyContent } from "../content/SpotifyContent";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

const redirect_uri =
	process.env.NODE_ENV === "production"
		? "http://localhost:3001"
		: "http://localhost:3000";

export default function Landing() {
	const connecting = useContext(SpotifyContent);

	const CLIENT_ID = "4c194a54913b473bb83708683dff2b7e";
	const REDIRECT_URI = "http://localhost:3000";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	const [token, setToken] = useState("");
	console.log("token", token);

	const headers = {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json",
	};
	const [recentlyPlayed, setRecentlyPlayed] = useState();

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("access_token");
		if (token) {
			setToken(token);
		}

		const isAuthenticated = () => {
			return token !== "";
		};

		setToken(token);
		console.log(isAuthenticated());
	}, [token]);

	const getRecentlyPlayed = () => {
		const recentlyPlayedTracksReq = axios.get(
			"https://api.spotify.com/v1/me/player/recently-played",
			{ headers }
		);

		axios
			.all([recentlyPlayedTracksReq])
			.then(
				axios.spread((...responses) => {
					setRecentlyPlayed(responses[0].data.items);
				})
			)
			.catch((errors) => {
				console.log(errors);
				// trigger error only if the token isn't being refreshed
				// if (!tokenExpired) {
				//   setError(true);
				// }
			});
		console.log(recentlyPlayed, "recently played");
	};

	return (
		<div className="relative h-screen flex justify-center items-center">
			{/* <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="object-cover h-full w-full"/> */}
			<div className="absolute">
				{/* <div className="text-white text-center pb-5 font-bold text-4xl tracking-wider">
					SpotAMood
				</div> */}
				{connecting ? (
					<div className="w-72 flex justify-center bg-transparent border-2 border-white text-white hover:text-black hover:bg-white font-bold tracking-wider uppercase rounded-full px-6 py-3">
						Loading...
					</div>
				) : (
					<a
						href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played`}
					>
						<div className="flex bg-transparent border-2 border-white text-white hover:text-black hover:bg-white font-bold tracking-wider uppercase rounded-full px-6 py-3">
							<span className="pr-2">
								<i className="fab fa-spotify"></i>
							</span>
							<h2 className={styles.text}>✨Please login✨</h2>
							<button
								onClick={() => {
									getRecentlyPlayed();
								}}
							>
								Get Recently Played
							</button>
						</div>
					</a>
				)}
			</div>
			{/* button to get recently played tracks */}
			<div className="absolute"></div>
		</div>
	);
}
