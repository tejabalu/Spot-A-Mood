import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div>
      <h1 className={styles.title}>This is SpotAMood</h1>
      <p className={styles.text}>This is a project where we are able to analyze your mood based on the songs you have listened to</p>
    <section className='bg-gray-600'>
        <main className='flex items-center justify-center'>
          {console.log(data)}
        </main>
      </section>
      <a
  target='_blank'
  rel='noopener noreferer'
  href={
    data?.isPlaying
      ? data.songUrl
      : 'https://open.spotify.com/user/3rvh3om22d4s6z9z4s17ri8sj'
  }
  className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
>
  <div className='w-16'>
    {data?.isPlaying ? (
      <img
        className='w-16 shadow-sm'
        src={data?.albumImageUrl}
        alt={data?.album}
      />
    ) : (
      <SiSpotify size={64} color={'#1ED760'} />
    )}
  </div>

  <div className='flex-1'>
    <p className='font-bold component'>
      {data?.isPlaying ? data.title : 'Not Listening'}
    </p>
    <p className='text-xs font-dark'>
      {data?.isPlaying ? data.artist : 'Spotify'}
    </p>
  </div>
  <div className='absolute bottom-1.5 right-1.5'>
    <SiSpotify size={20} color={'#1ED760'} />
  </div>
</a>
    </div>
  );
}