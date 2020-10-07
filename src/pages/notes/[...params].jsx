import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter();
    const {params} = router.query;  

    return (<div>Note {params[0]} Page</div>)
}

export default Page