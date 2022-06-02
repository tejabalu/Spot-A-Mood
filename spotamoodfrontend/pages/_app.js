import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Landing from "../pages/Landing";
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
    const  isAuthenticated   = useContext(SpotifyContent)

	return (
		<Layout>
			<Component {...pageProps} />
            <Landing />
		</Layout>
	);
}

export default MyApp;
