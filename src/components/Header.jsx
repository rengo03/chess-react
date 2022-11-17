import React from 'react'
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  )
}

const Container = styled.div`
    color:white;
    padding-top: 1.75rem;
    padding-bottom: 1rem;
`;

export default Header

