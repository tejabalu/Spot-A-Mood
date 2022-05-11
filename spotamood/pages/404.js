import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
          // router.go(-1)
          // router.go(1)
        router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>this page is not in the mood</h2>
            <p>going back to the <Link href="/"><a>homepage</a></Link> in 3 seconds</p>
        </div>
    );
}

export default NotFound;