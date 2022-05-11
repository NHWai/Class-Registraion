import React from "react";
import styled from "styled-components";

function Card({ link }) {
  return (
    <CardItem>
      <img src={link}></img>
    </CardItem>
  );
}

const CardItem = styled.div`
  width: 18rem;

  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
`;

export default Card;
