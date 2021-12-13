import styled from "styled-components";
import HomeBackground from "./../../imgs/HomeBackground.jpg"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: url(${HomeBackground});
    background-size: cover;
    background-position: center;
    .spaceTop {
        padding: 4rem;
    }
    .footerspace{
        padding: 15rem 0;
    }
`