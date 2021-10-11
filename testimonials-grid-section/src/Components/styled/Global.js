import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        font-size: ${({ theme }) => theme.typography.fontSizePX};
    }

    body{
        width: 100%;
        height: 100vh;
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.light.colors.lightGrayishBlue};
        font-family: 'Barlow Semi Condensed', sans-serif;
        font-size: ${({ theme }) => theme.typography.fontSizePX};
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            height: auto;
        }
    }
    ${"" /* ${({ theme }) => console.log(theme)} */}
`;

export default GlobalStyles;
