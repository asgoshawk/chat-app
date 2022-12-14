import styled from "styled-components";
import BackgroundImage from "../images/background-image.jpg";

export const StyledForm = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    opacity: 0.9;
    width: 30rem;
    padding: 2rem;
    background-color: rgb(54, 57, 63);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 0px;
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;

    .input-bundle {
      width: 100%;
    }

    h3 {
      font-size: 1.5rem;
      color: white;
      text-align: center;
    }

    label {
      display: block;
      font-size: 0.75rem;
      color: rgb(185, 187, 190);
      margin-bottom: 0.5rem;
    }

    label.warning {
      color: #f04747;
    }

    input {
      background-color: rgb(32, 34, 37);
      border: none;
      outline: none;
      border-radius: 3px;
      padding: 10px;
      height: 2.5rem;
      width: 100%;
      color: white;
    }

    button {
      cursor: pointer;
      position: relative;
      width: 100%;
      background-color: hsl(235, 86%, 65%);
      outline: none;
      border: none;
      border-radius: 3px;
      height: 2.5rem;
      color: white;
      transition: 0.17s all ease-in-out;

      &:hover {
        background-color: hsla(235, 86%, 65%, 0.8);
      }
    }

    a {
      font-size: 0.75rem;
      color: rgb(0, 175, 244);
    }

    span {
      font-size: 0.75rem;
      color: rgb(163, 166, 170);
    }

    p {
      text-align: center;
      color: rgb(163, 166, 170);
    }
  }
`;
