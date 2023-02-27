import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <StyledHome>
            <span>Home</span>

        </StyledHome>
    )
}


const StyledHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c1c1c1;
    font-size: 5rem;
    height: 90vh;
`   
