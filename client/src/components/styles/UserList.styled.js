import styled from "styled-components";

export const SytledUserList = styled.div`
  background-color: rgb(47, 49, 54);
  width: 15rem;
  color: #fff;

  .groupName {
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
`;
