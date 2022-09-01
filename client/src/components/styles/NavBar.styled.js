import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 5rem;
  height: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
  }

  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 0.25rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 10px;
    background-color: white;
    transition: all 0.1s ease-in-out;
  }

  .groupCircle {
    background-color: rgb(47, 49, 54);
    height: 50px;
    width: 50px;
    margin: 0.5rem 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s ease-in-out;
  }

  .groupCircle.home {
    color: #99aab5;
  }

  .groupCircle.plus {
    color: green;
  }

  .seperator-outter {
    display: flex;
    justify-content: center;
    div {
      background-color: #36393f;
      width: 50px;
      height: 1.25px;
    }
  }

  li:hover {
    .groupCircle {
      border-radius: 25%;
      color: white;
      background-color: #7289da;
    }

    .groupCircle.plus {
      color: white;
      background-color: green;
    }

    .indicator {
      height: 25px;
    }
  }

  li.activate {
    .groupCircle {
      border-radius: 25%;
    }
    .indicator {
      height: 40px;
    }
  }
`;
