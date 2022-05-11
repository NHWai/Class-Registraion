import React from "react";
import styled from "styled-components";
import RegForm from "./components/RegForm";
import WelcomePage from "./components/WelcomePage";
import Route from "./components/Route";

function App() {
  const [dark, setDark] = React.useState(false);

  function handleDark() {
    setDark((pre) => !pre);
  }

  return (
    <Container style={{ backgroundColor: dark ? "#000" : "#fff" }}>
      <Route path="/">
        <WelcomePage />
      </Route>
      <Route path="/regform">
        <RegForm handleDark={handleDark} />
      </Route>
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
