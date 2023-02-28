import React, { Suspense } from "react";
import { Await, defer, Link, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Fallback from "../Fallback";

export default function Post() {
  const navigate = useNavigate();
  const { post, id } = useLoaderData();

  let postData = <p>No Related Data</p>;
  const returnHome = () => navigate("/", { replace: true });
  const returnBack = () => navigate(-1);

  if (post) postData = <SelectedPost />;

  return (
    <StyledContainer>
      <Suspense fallback={<Fallback />}>
        <Await resolve={post}>
          {postData}
        </Await>
      </Suspense>
      <ButtonContainer>
        <Button onClick={returnHome}>Home</Button>
        <Button onClick={returnBack}>Posts</Button>
        <StyledLink to={`/posts/${id}/edit`}>Edit</StyledLink>
      </ButtonContainer>
    </StyledContainer>
  );
}

const SelectedPost = () => {
  const post = useAsyncValue()
  const { id, body, title } = post
  return <StyledPosts>
    <li>{id}</li>
    <li>{title}</li>
    <li>{body}</li>
  </StyledPosts>
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
const styles = css`
    outline: none;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 400 !important;
  background: #c0c0c0;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`
const Button = styled.button`
 ${styles}
`;
const StyledLink = styled(Link)`
 ${styles}
 letter-spacing: 0.1rem;
 font-weight: 800;
`
const getSelectedPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}
export const postLoader = async ({ params }) => {
  const { id } = params;
  // const selectedPost = await getSelectedPost(params);
  return defer({ post: getSelectedPost(id), id })
};
