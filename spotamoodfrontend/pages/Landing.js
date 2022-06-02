import React, { useContext } from 'react'
import { SpotifyContent } from '../content/SpotifyContent';
import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.css";


const redirect_uri = process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : 'http://localhost:3000'

// const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played`

// href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}

// const CLIENT_ID = "4c194a54913b473bb83708683dff2b7e"
// const REDIRECT_URI = "http://localhost:3000"
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
// const RESPONSE_TYPE = "token"

export default function Landing() {
    const   connecting  = useContext( SpotifyContent )

    const CLIENT_ID = "4c194a54913b473bb83708683dff2b7e"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [ token, setToken ] = useState("")


    return (
        <div className="relative h-screen flex justify-center items-center">
            {/* <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="object-cover h-full w-full"/> */}
            <div className="absolute">
                {/* <div className="text-white text-center pb-5 font-bold text-4xl tracking-wider">
                    SpotAMood
                </div> */}
                {connecting
                ? <div className="w-72 flex justify-center bg-transparent border-2 border-white text-white hover:text-black hover:bg-white font-bold tracking-wider uppercase rounded-full px-6 py-3">
                    Loading...
                </div>
                : <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${redirect_uri}&scope=user-read-private%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20user-read-recently-played`}>
                    <div className="flex bg-transparent border-2 border-white text-white hover:text-black hover:bg-white font-bold tracking-wider uppercase rounded-full px-6 py-3">
                        <span className="pr-2">
                        <i className="fab fa-spotify"></i>
                        </span>
                        <h2 className={styles.text}>✨Please login✨</h2>
                    </div>
                </a>}
            </div>
        </div>
    )
}
