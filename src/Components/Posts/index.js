import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

export default function Posts() {
    const posts = useLoaderData()
    return (
        <StyledContainer>
            {
                posts?.map(({ id, title, body }) => {
                    return <StyledPosts key={id}>
                        <li>{id}</li>
                        <li>{title}</li>
                        <li>{body}</li>
                    </StyledPosts>
                })
            }
        </StyledContainer>
    )
}

const StyledPosts = styled.ul`
    color:#c1c1c1;
    & :first-child{
        font-weight: 800;
        font-size: larger;
    }
    li{
        list-style: none;
    }
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`

const postLoader = async ({ request, params }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

export { postLoader }