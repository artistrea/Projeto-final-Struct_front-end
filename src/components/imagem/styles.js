import styled from "styled-components";

export const Container = styled.div`
    
    display: block;
    position: fixed;
    width: 62%;
    height:90%;
    right: 0;
    top: 250px;

    img {
        width: 100%;
        margin-top: -60%;
    }

    @media only screen and (max-width: 980px) {
        display: none;
    }
`;