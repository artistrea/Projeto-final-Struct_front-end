import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #464348;
    display: flex;
    flex-direction: column;
    width: 32rem;
    height: 23.938rem;
    border-radius: 25px;
    margin: 3.375rem;

    img {
        object-fit: cover;
        object-position: center;
        max-width: 32rem;
        border-radius: 25px 25px 0px 0px;
        height: 15.688rem;
    }

    p {
        margin-left: 1.5rem;
        color: white;
    }

    @media only screen and (max-width: 480px) {
        margin: 1.5rem;
        width: 21.688rem;
        height: 20rem;

        img{
            height: 10rem;
        }
        p {
            margin-left: 0.5rem;
        }
    }
`;