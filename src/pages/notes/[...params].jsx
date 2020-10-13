import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter();
    const {params} = router.query;  

    return (<div>Note {!!params ? params[0] : null} Page</div>)
}

export default Page