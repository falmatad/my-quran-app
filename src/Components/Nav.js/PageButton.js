import React from "react";
import styled from "styled-components";
const PageButton = props => {
const NextButton = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.primary ? "#FFF" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#FFF")};
  border: 0;
  margin: 5px 10px;
  transition: 0.2s ease-in;
  border: ${props =>
    props.primary ? "2px solid #99f3eb" : "2px solid #2a2223"};
  &:hover {
    background: ${props => (props.primary ? "#2a2223" : "#fff")};
    color: ${props => (props.primary ? "#fff" : "#2a2223")};
    border: ${props =>
      props.primary ? "2px solid #2a2223" : "2px solid #99f3eb"};
  }
  `;

  return (
    <div className="date-card " >
       <NextButton onClick={() => props.setPage(props.page - 1)}>Previos Page</NextButton>
       <NextButton onClick={() => props.setPage(props.page + 1)}>Next Page</NextButton>
    </div>
  );
};
export default PageButton;