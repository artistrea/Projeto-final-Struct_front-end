import styled from "styled-components";

export const Container = styled.div `
    
    width: 354px;
    height: 45.8rem;

    display: flex;
    background: none;

    h1{
        width: 125px;
        height: 18px;
        font-size: 40px;
        
        /* identical to box height, or 32% */
        
        color: #FFFFFF;
    }

    }
    input{
        width: 338px;
        height: 64px;
        margin: 0.5rem auto;

        background: rgba(199, 255, 255, 0.65);
        border-radius: 50px;
        border: none;

        text-align: center;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 18px;

        color: #000000;
        :focus{
            outline: none;  
        }
    }
`