import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

import { SpotifyContent } from "../content/SpotifyContent";

import dynamic from "next/dynamic";
// const ApiCharts = dynamic(() => import("./ApiCharts"), {
// 	ssr: false,
// });
// const SpotifyAuth = dynamic(() => import("./SpotifyAuth"), {
// 	ssr: false,
// });

function MyApp({ Component, pageProps }) {
	// console.log("MyApp");
	const CLIENT_ID = "4c194a54913b473bb83708683dff2b7e"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

	const [ token, setToken ] = useState("")
    const [ searchKey, setSearchKey ] = useState("")
    const [ artists, setArtists ] = useState([])

    const [ recentlyPlayed, setRecentlyPlayed ] = useState()

    const getData = () => {
        // run all axios calls
        const recentlyPlayedTracksReq = axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers })
        
        axios.all([
            recentlyPlayedTracksReq
        ]).then(axios.spread((...responses) => {
            setRecentlyPlayed(responses[0].data.items)
        })).catch(errors => {
            console.log(errors)
            // trigger error only if the token isn't being refreshed
            if(!tokenExpired){
                setError(true)
            }
        })
    }

	useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        // getToken()


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

	return (
		<main>
			<Component {...pageProps} />
		<div className="App">
            <header className="App-header">
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>✨Please login✨</h2>
                }

                {renderArtists()}

            </header>
        </div>
		</main>
	);
}

export default MyApp;
