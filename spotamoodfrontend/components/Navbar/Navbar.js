import Link from 'next/link'

const Navbar = () => {
    return (
    <nav>
        <div className="logo">
        {/* <h1>SpotAMood</h1> */}
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="https://github.com/tejabalu/Spot-A-Mood"><a>Github</a></Link>
    </nav>
);
}

export default Navbar;