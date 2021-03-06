import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: #D45C1A;
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  a{
    transition: opacity .3s;
  }
  a:hover,
  a:focus{
    opacity: .3;
  }
`;

export default FooterBase;
