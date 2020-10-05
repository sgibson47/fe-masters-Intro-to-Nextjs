import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Notes Page</h1>
            <Link href='/notes/[id]' as={'/notes/1'}>
                <a>Notes 1</a>
            </Link>
        </div>
    )
}

export default Page