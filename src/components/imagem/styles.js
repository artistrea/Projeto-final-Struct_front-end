import styled from "styled-components";

export const Container = styled.div`
    
    position: flex;
    height: 100vh;
    width: 50%;
    float: right;
    overflow: hidden;
    img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }
    /* position: fi
    xed;
    width: 62%;
    height:90%;
    right: 0;
    top: 250px;

    img {
        width: 100%;
        margin-top: -60%;
    } */ 

    @media only screen and (max-width: 1007px) {
        display: none;
    } 
`;