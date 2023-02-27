import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

const postLoader = async ({ requst, params }) => {
    console.log({ requst, params }, "{requst,params}")
}

export { postLoader }