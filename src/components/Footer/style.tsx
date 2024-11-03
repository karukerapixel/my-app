import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.black};
  margin-top: 60px;
`;

export const FooterBottom = styled.footer`
  display: flex;
  justify-content: center;

  > p {
    font-size: 0.6rem;
    color: white;
    padding: 12px 0;
  }
`;