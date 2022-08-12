import styled from "styled-components";

export const StyledRoom = styled.div`
  display: flex;
  width: calc(100% - 15rem);
  margin: 0;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  background-color: rgb(54, 57, 63);

  p {
    color: white;
  }

  .inputBar {
    background-color: rgb(64, 68, 75);
  }
`;
