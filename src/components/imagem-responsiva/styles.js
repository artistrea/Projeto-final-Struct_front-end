import styled from "styled-components";

export const Container = styled.div`
    
    display: none;

    @media only screen and (max-width: 980px) {
        display: block;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding-left: auto;
        max-height: 40%;


        img {
            width: 100%;
        }
    }
`;