import React from "react";
import styled from "styled-components";
import RegForm from "./components/RegForm";

function App() {
  const [dark, setDark] = React.useState(false);

  function handleDark() {
    setDark((pre) => !pre);
  }

  return (
    <Container style={{ backgroundColor: dark ? "#000" : "#fff" }}>
      <RegForm handleDark={handleDark} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 10px;
  display: grid;
  place-items: center;
`;

export default App;
