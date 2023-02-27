import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Post() {
  const navigate = useNavigate();
  const post = useLoaderData();

  let postData = <p>No Related Data</p>;

  const returnHome = () => navigate("/", { replace: true });
  const returnBack = () => navigate(-1);

  if (post)
    postData = (
      <StyledPosts>
        <li>{post.id}</li>
        <li>{post.title}</li>
        <li>{post.body}</li>
      </StyledPosts>
    );

  return (
    <StyledContainer>
      {postData}
      <ButtonContainer>
        <Button onClick={returnHome}>To Home</Button>
        <Button onClick={returnBack}>To Posts</Button>
      </ButtonContainer>
    </StyledContainer>
  );
}

const ButtonContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
`;

const StyledPosts = styled.ul`
  color: #c1c1c1;
  max-width: 600px;
  margin-bottom: 0.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  background: #262626;
  cursor: pointer;
  & :first-child {
    font-weight: 800;
    font-size: larger;
  }
  li {
    cursor: pointer;
    list-style: none;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Button = styled.button`
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

export const postLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = res.json();

  return post;
};
