import React from "react";
import styled from "styled-components";

export const NotFound = ({ error }) => {
  return (
    <StyledNotFound>
      <span>ERROR</span>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c1c1c1;
  font-size: 5rem;
  height: 90vh;
`;
