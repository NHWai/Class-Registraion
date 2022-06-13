import React from "react";
import Link from "./Link";
import styled from "styled-components";

import Card from "./Card";
import lvl1_1 from "../assests/lvl1_1Sat&Sun.jpg";
import lvl1_2A from "../assests/lvl1_2SectionA.jpg";
import lvl1_2B from "../assests/lvl1_2SectionB.jpg";
import bsA from "../assests/BasicSectionA.jpg";
import bsB from "../assests/BasicSectionB.jpg";
import bsC from "../assests/BasicSectionC.jpg";

function WelcomePage() {
  return (
    <Contain>
      <h2>Develop Your Language Skills With Besties!</h2>
      <Link href="/regform">Register Here </Link>
      <CardContainer>
        <Card link={lvl1_1} />
        <Card link={lvl1_2A} />
        <Card link={lvl1_2B} />
        <Card link={bsA} />
        <Card link={bsB} />
        <Card link={bsC} />
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
