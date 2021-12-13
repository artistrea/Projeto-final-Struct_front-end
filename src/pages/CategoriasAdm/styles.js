import styled from "styled-components";
import LoginBackground from "./../../imgs/LoginBackground.jpg"

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 100vh;
    width: 99vw;
    background: url(${LoginBackground});
    background-size: cover;
    background-position: center;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    padding: 0.87rem 0;
`;