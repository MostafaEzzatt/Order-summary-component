import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{box-sizing: border-box; font-family: 'Kumbh Sans', sans-serif; padding: 0; margin: 0;}

    html{
        font-size: ${({ theme }) => `${theme.typo.fontSize}px`}
    }

    body{
        position: relative;
        min-width: 100%;
        min-height: 100vh;
        @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
            display: flex;
            justify-content: center;
        }
    }

    a{
        text-decoration:none;
    }

    img{
        max-width: 100%;
    }

    .flex{
        display: flex;
    }

    .f-ai-c{
        align-items: center;
    }

    .f-jc-c{
        justify-content: center;
    }

    .f-jc-b{
        justify-content: space-between;
    }

    .hide{
        display: none;
    }
    .pointer{
        cursor: pointer;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            visibility: hidden;
            left: ${({ theme }) => `-${theme.sizeUnite.rem(250)}`};
        }
        1%{
            opacity:0;
            visibility: visible;
            left: 0;
        }

        100% {
            opacity: 1;
            left: 0;
            visibility: visible;
        }
    }
    }


    ${"" /* helpers */}

    @media (min-width: ${({ theme }) => theme.breakPoints.medium}){
        .md-show{
            display: inline-block;
        }

        .md-hide{
            display: none;
        }
    }    
`;

export default GlobalStyles;
