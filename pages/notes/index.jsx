import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Page = () => {
    const router = useRouter();

    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note ${i}`}) );

    return (
        <div>
            <h1>Notes Page</h1>

            {notes.map(note => (
                <div>
                    <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
                        <a>{note.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Page