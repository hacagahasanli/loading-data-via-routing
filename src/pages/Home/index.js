import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <StyledHome>
      <span>Home</span>
      <StyledLink to={"/posts"}>Posts</StyledLink>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #c1c1c1;
  font-size: 5rem;
  height: 90vh;
`;

const StyledLink = styled(Link)`
  outline: none;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 800;
  background: #c0c0c0;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
