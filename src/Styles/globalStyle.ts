import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{   
        --primary-color: #DDDDDD;
        --secondary-color: #2F2F2F;
        --terceary-color: #7E7E7E;
        --quaternary-color: #F2F2F2;
        --details-color: #5D5FEF;
        --ok-color: #50D200;
        --not-ok-color: #D22C2C ;
    }
    body {
        background-color: var(--primary-color);
        text-transform: uppercase;
        font-family: 'Inter', sans-serif;
        color: var(--secondary-color);
        font-size: 1rem;

    }
    link {
        
    }
    strong {
        font-weight: bold;
    }
    button:hover{
        cursor: pointer;
    }
` 