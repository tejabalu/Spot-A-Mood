import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
<<<<<<< HEAD
  return (
    <div>
      <h1 className={styles.title}>This is SpotAMood</h1>
      <p className={styles.text}>This is a project where we are able to analyze your mood based on the songs you have listened to</p>
    <Link href="http://spotify.com">
      <a className={styles.btn}>sign-in to spotify</a>
    </Link>
    </div>
  );
}
=======
	return (
		<div>
			<h1 className={styles.title}>This is SpotAMood</h1>
			<p className={styles.text}>
				This is a project where we are able to analyze your mood based
				on the songs you have listened to
			</p>
			<Link href="https://github.com">
				<a className={styles.btn}>sign-in to spotify</a>
			</Link>
		</div>
	);
}
>>>>>>> c7006c937a8a21cfbc2c5e8fea29e706d8b8b239