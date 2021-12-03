import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #464348;
    display: flex;
    flex-direction: column;
    width: 21.688rem;
    height: 23.938rem;
    border-radius: 25px;
    margin: 1.5rem;

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        border-radius: 25px 25px 0px 0px;
        height: 15.688rem;
    }

    p {
        margin-left: 1.5rem;
        color: white;
    }

    @media only screen and (max-width: 500px) {
        width: 10.688rem;
        height: 12rem;
        margin: 0.5rem;

        img{
            height: 8rem;
        }
    }
`;