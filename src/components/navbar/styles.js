import styled from "styled-components";

export const Container = styled.nav`
    margin: 1rem 2.5rem;
    display: flex;
    justify-content: space-between;
    max-width: 100vw;

    a{  
        text-decoration: none;
        

        width: 100px;
        height: auto;
        top: 43px;
        
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 18px;
        
        /* identical to box height, or 45% */
        
        color: #FBE4FF;
    }

    .nav-middle a{
        margin: 1rem 2.5rem;
        vertical-align: middle;
        
        justify-content: space-between;
        vertical-align: middle;
    }

    a:hover{
        cursor: pointer;
        cursor: pointer;
        background-color: rgba(70, 70, 70, 0.4);
        border-radius: 13px;
        transition: 600ms ease;
    }
`;