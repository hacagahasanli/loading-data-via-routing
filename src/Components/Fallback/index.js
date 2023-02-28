import React from 'react'
import styled from 'styled-components'

export default function Fallback() {
    return (
        <StyledContainer>
            <span>Just wait a second robot !....</span>
        </StyledContainer>
    )
}


const StyledContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span{
    outline: none;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    font-weight: 400 !important;
    background: #c0c0c0;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
    
`;