import styled from "styled-components";

export const StyledRoom = styled.div`
  position: relative;
  width: calc(100% - 15rem);
  background-color: rgb(54, 57, 63);

  p {
    color: white;
  }

  .roomHeader {
    position: absolute;
    background-color: rgb(54, 57, 63);
    left: 0;
    top: 0;
    width: 100%;
    color: grey;
    height: 3rem;
    font-size: 1.5rem;
    margin: 0;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 4px -4px black;
  }

  .roomMain {
    width: 100%;
    float: left;
    height: 100%;
    padding: 3.5rem 0.5rem 0;
  }

  .roomBody {
    display: flex;
    flex-direction: column;
    height: calc(100% - 7.5rem);
    overflow-y: auto;
  }

  .roomFooter {
    position: relative;
    margin-top: 1rem;
    height: 4rem;

    div {
      position: relative;
      height: 3rem;
      width: 95%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgb(64, 68, 75);
      border-radius: 0.5rem;
      padding: 0 1rem;

      & > * {
        float: left;
      }

      input {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 3rem);
        outline: 0;
        border: 0;
        background: transparent;
        color: white;
        font-size: 1.25rem;

        ::placeholder {
          color: grey;
        }
      }

      button {
        cursor: pointer;
        position: relative;
        height: 100%;
        width: 3rem;
        font-size: 1rem;
        top: 50%;
        transform: translateY(-50%);
        outline: 0;
        border: 0;
        padding-left: 0.75rem;
        border-left: 1px solid grey;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
