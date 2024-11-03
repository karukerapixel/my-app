import styled from "styled-components";

export const ServicesWrapper = styled.div`
  width: 80%;
  margin: 60px 0;
`;

export const ServicesList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 400px);
  grid-gap: 24px;
`;

export const ServicesListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;

  &:nth-child(1) {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: -1;
  }

  &:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: -1;
    grid-row: 1;
  }

  &:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  &:nth-child(4) {
    grid-column: 3;
    grid-row: 2;
  }

  &:hover {
    > a {
      > h2 {
        color: #f7f7f7;
        background-color: ${(props) => props.theme.colors.black};
        transform: translate(24px, -24px);
        box-shadow: 0 5px 8px hsla(0, 0%, 19%, 0.4);
      }
    }
  }

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.3s ease-in-out;

    > h2 {
      width: 75%;
      font-size: 1rem;
      font-weight: bold;
      background-color: #fff;
      padding: 12px 24px;
      transition: all 0.3s ease-in-out;
    }
  }
`;