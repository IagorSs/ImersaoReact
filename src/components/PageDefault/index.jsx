import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--background);
  color: var(--white);
  flex: 1;
  padding: 30px 5%;
`;

export default function PageDefault({
  children,
  notStyledBefore,
  notStyledAfter,
}) {
  return (
    <>
      <Menu />
      {notStyledBefore}
      <Main>
        {children}
      </Main>
      {notStyledAfter}
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
  notStyledBefore: '',
  notStyledAfter: '',
};

PageDefault.propTypes = {
  children: PropTypes.any,
  notStyledBefore: PropTypes.any,
  notStyledAfter: PropTypes.any,
};
