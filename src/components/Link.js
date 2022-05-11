import React from "react";
import styled from "styled-components";

function Link({ href, children }) {
  function onClick(e) {
    e.preventDefault();

    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");

    window.dispatchEvent(navEvent);
  }

  return (
    <Anchor onClick={onClick} href={href}>
      {children}
    </Anchor>
  );
}

const Anchor = styled.a`
  text-decoration: none;
  padding: 1em 2em;
  color: midnightblue;
  border: 1px solid midnightblue;
  display: inline-block;
  margin: 0 auto;
  border-radius: 1rem;

  :hover {
    color: #eee;
    background-color: midnightblue;
  }

  :active {
    transform: scale(0.98);
    color: midnightblue;
    background-color: transparent;
  }
`;

export default Link;
