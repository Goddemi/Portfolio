import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
     ${reset}

    * {
    margin : 0;
    padding : 0;
    outline : 0;
    box-sizing: border-box;
    
}   
    body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #0F111A;
}
    #root {
    margin : 0 auto;
}   
    h1 {
        font-size: 45px;
}
    a {
    color : white;
    text-decoration-line: none;

     a:visited {
    color: white;
     }
}
`;

export default GlobalStyle;
