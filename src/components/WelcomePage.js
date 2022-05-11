import React from "react";
import Link from "./Link";
import styled from "styled-components";

import Card from "./Card";
import mayclass from "../assests/mayclass.jpg";
import mayclass2 from "../assests/mayclass2.jpg";
import juneclass from "../assests/juneclass.jpg";
import juneclass2 from "../assests/juneclass2.jpg";

function WelcomePage() {
  return (
    <Contain>
      <h2>Develop Your Language Skills With Besties!</h2>
      <Link href="/regform">Register Here </Link>
      <CardContainer>
        <Card link={mayclass2} />
        <Card link={mayclass} />
        <Card link={juneclass2} />
        <Card link={juneclass} />
      </CardContainer>
    </Contain>
  );
}

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h2 {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.2rem;
  }
`;

const CardContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  max-width: 50rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export default WelcomePage;
