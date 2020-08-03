import styled, { css } from 'styled-components';

// import Link
// const Button = styled(Link)``

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: .3s;
  ${({ defineBackgroundColor }) => (defineBackgroundColor ? css`
    background: var(--primary);
    border: 0;
  ` : '')}

  &:hover,
  &:focus {
    background: var(--primaryHover);
  }

  @media (max-width: 800px) {
    & {
      padding: 12px 14px;
    }
    a {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
    }
  }
`;

export default Button;
