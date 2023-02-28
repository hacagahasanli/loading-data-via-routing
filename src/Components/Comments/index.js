import React, { Suspense } from 'react'
import { Await, defer, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Fallback from '../Fallback';

export default function Comments() {
  const { comment } = useLoaderData()
  return (
    <StyledContainer>
      <Suspense fallback={<Fallback />}>
        <Await resolve={comment}>
          {(receivedComment) => {
            const { id, name, email, body } = receivedComment;
            return (<>
              {
                <StyledPosts key={id}>
                  <li>{id}</li>
                  <li>{name}</li>
                  <li>{email}</li>
                  <li>{body}</li>
                </StyledPosts>
              }
            </>)
          }
          }
        </Await>
      </Suspense>
    </StyledContainer>
  )
}


const getComment = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
  const comment = await res.json();
  return comment
}

export const commentLoader = async ({ params, request }) => {
  const { id } = params
  return defer({ comment: await getComment(id) })
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
