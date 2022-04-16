import React from "react";
import styled from "styled-components";
import RegForm from "./components/RegForm";
import bestie from "./assests/bestie.jpg";

function App() {
  return (
    <Container>
      <RegForm />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  padding: 10px;
  display: grid;
  place-items: center;
`;

export default App;
