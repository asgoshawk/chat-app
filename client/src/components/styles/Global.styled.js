import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background-color: #1e2124;
        font-size: 16px;
        
    }
`;

export default StyledGlobal;
