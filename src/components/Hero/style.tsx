import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.colors.black};
  padding: 150px 100px;
  margin-bottom: 60px;

  > h1 {
    font-size: 6.5rem;
    font-weight: 500;
    color: white;
    line-height: 0.9;
  }
`;