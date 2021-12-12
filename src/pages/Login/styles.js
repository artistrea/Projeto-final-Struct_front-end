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
`