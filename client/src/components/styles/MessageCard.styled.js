import styled from "styled-components";

export const StyledMessageCard = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;

  & > div {
    float: left;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cornsilk;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0 1rem;

    span {
      display: inline-block;
      color: black;
      font-size: 1.5rem;
      vertical-align: middle;
      line-height: normal;
    }
  }

  .message {
    .messageAuthor {
      font-weight: 600;
      color: #457b9d;
    }

    .messageContent {
      width: 25rem;
      word-wrap: break-word;
    }
  }
`;
