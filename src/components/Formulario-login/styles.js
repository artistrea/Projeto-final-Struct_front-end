import styled from "styled-components";

export const Container = styled.div `
    
    display: flex;
    flex-direction: column;
    margin: 5rem;
    width: 21.5rem;
    height: 32rem;

    h1{
        width: 125px;
        height: 18px;
        font-size: 40px;
        
        /* identical to box height, or 32% */
        
        color: #FFFFFF;
    }
    input{
        width: 100%;
        height: 64px;

        background: rgba(199, 255, 255, 0.65);
        border-radius: 50px;
        border: none;
        margin-top: 1rem;
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

    @media only screen and (max-width: 768px) {
        max-width: 100%;
        h1{
            font-size: 2rem;
        }
        input{
            height: 3rem;
            font-size: 30px;
        }
    }
    @media only screen and (max-width: 450px) {
        max-width: 100%;
        h1{
            font-size: 1.5rem;
        }
        input{
            font-size: 1rem;
            height: 2.3rem;
        }
    }
    
`