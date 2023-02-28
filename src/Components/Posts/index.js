import React, { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import Fallback from "../Fallback";

export default function Posts() {
  const posts = useLoaderData();
  return (
    <StyledContainer>
      <Suspense fallback={<Fallback />}>
        <Await resolve>

        </Await>
      </Suspense>
      {posts?.map(({ id, title, body }) => {
        return (
          <Link key={id} to={`/posts/${id}`} style={{ textDecoration: "none" }}>
            <StyledPosts key={id}>
              <li>{id}</li>
              <li>{title}</li>
              <li>{body}</li>
            </StyledPosts>
          </Link>
        );
      })}
    </StyledContainer>
  );
}

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const postsLoader = async () => {
  return defer({ posts: getPosts })
};

export { postsLoader };
