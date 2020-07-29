import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--background);
  color: var(--white);
  flex: 1;
`;

export default function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  )
}
