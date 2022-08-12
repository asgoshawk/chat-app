import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body {
        background-color: #1e2124;
        font-size: 16px;
        margin: 0;
    }
`;

export default StyledGlobal;
