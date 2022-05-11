import Layout from "../components/layout/Layout";
import "../styles/globals.css";

import dynamic from "next/dynamic";
const ApiCharts = dynamic(() => import("./ApiCharts"), {
	ssr: false,
});
const SpotifyAuth = dynamic(() => import("./SpotifyAuth"), {
	ssr: false,
});

function MyApp({ Component, pageProps }) {
	// console.log("MyApp");
	return (
		<Layout>
			<Component {...pageProps} />

			<ApiCharts />
			<SpotifyAuth />
		</Layout>
	);
}

export default MyApp;
