import { createGlobalStyle } from "styled-components";
import rem from "@utils/sizes";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: ${ rem(16) };
        font-weight: 400;
    }
    
    html, body, #root {
        height: 100%;
    }
    
    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }
`;