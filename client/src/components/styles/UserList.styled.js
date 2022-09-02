import styled from "styled-components";

export const SytledUserList = styled.div`
  background-color: rgb(47, 49, 54);
  width: 15rem;
  color: #fff;
  display: flex;
  flex-direction: column;

  & .groupName {
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  ul {
    margin-top: 1.5rem;
    padding-left: 1rem;
    list-style: none;
  }

  li {
    margin: 1rem 0;
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  & .userPanel {
    height: 5rem;
    padding: 0 0.5rem;
    margin-top: auto;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .userControl {
      display: flex;
      align-items: center;

      button {
        display: flex;
        height: 2.5rem;
        width: 2.5rem;
        align-items: center;
        justify-content: center;
        background: none;
        outline: none;
        border: none;
        border-radius: 5px;

        svg {
          color: #99aab5;
        }

        :hover {
          background-color: #36393f;
          svg {
            color: #fff;
          }
        }
      }
    }

    & .userProfile {
      display: flex;
      align-items: center;

      & .userCircle {
        background-color: #7289da;
        height: 2.5rem;
        width: 2.5rem;
        margin-right: 0.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.1s ease-in-out;
      }

      & > p {
        font-size: 0.75rem;
        width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
