import styled from "styled-components";
import LoginBackground from "./../../imgs/LoginBackground.jpg"

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: url(${LoginBackground});
    background-size: cover;
    background-position: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .rightside{
        
        display: flex;
        flex-direction: column;
        
        align-content: center;
        margin: 0 0 1rem 0;
        
    }
    @media only screen and (max-width: 768px) {
        .rightside{
            max-width: 50%;
            height: fit-content;
        }
    }
    @media only screen and (max-width: 450px) {
        
    }
`