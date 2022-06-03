import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./useAuth";

if (typeof window !== "undefined") {
	const code = new URLSearchParams(window.location.search).get("code");
}

// const code = new URLSearchParams (window.location.search).get("code")

export const SpotifyContent = createContext();

function SpotifyProvider({ children }) {
	const { accessToken, connecting, SignOut, error, setError, tokenExpired } =
		useAuth(code);
	console.log("context provider");

	const headers = {
		Authorization: `Bearer ${accessToken}`,
		"Content-Type": "application/json",
	};

	const [isAuthenticated, setIsAuthenticated] = useState(
		accessToken ? true : false
	);

	const [recentlyPlayed, setRecentlyPlayed] = useState();

	const getData = () => {
		// run all axios calls
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
				if (!tokenExpired) {
					setError(true);
				}
			});
	};
	console.log(recentlyPlayed);
	// store in local storage
	localStorage.setItem("recentlyPlayed", JSON.stringify(recentlyPlayed));

	useEffect(() => {
		if (error) {
			return;
		}
		if (!accessToken) {
			setIsAuthenticated(false);
			return;
		}
		setIsAuthenticated(true);
		getData();
		console.log(recentlyPlayed, "recently played");
	}, [accessToken, error]);

	return (
		<SpotifyContent.Provider
			value={{
				error,
				setError,
				connecting,
				SignOut,
				isAuthenticated,
				setIsAuthenticated,
				// topArtistsYear,
				// topArtistsSixMonths,
				// topArtistsMonth,
				// likedTracksYear,
				// likedTracksSixMonths,
				// likedTracksMonth,
				recentlyPlayed,
			}}
			// store recently played tracks in local storage
		>
			{children}
		</SpotifyContent.Provider>
	);
}

export default SpotifyProvider;
