import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../styles/myFirstModule.module.css'

const Page = () => {
    const router = useRouter();

    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note ${i}`}) );

    return (
        <div >
            <h1>Notes Page</h1>

            {notes.map(note => (
                <div key={note.id}>
                    <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`} > 
                        <a className={styles.link}>{note.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Page