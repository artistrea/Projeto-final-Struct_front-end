import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    min-height: 6.5rem;
    left: 0px;
    display: flex;
    justify-content: space-around;
    background-color: rgba(7, 32, 89, 0.9);
    flex-wrap: wrap;

    div {
        margin: 2.2rem 1rem 0 1rem;
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
    }

    @media only screen and (max-width: 1220px) {
        div {
            font-size: 1.8rem;
        }
    }

    @media only screen and (max-width: 900px) {
        div {
            font-size: 1.3rem;
        }
    }

    @media only screen and (max-width: 680px) {
        div {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 550px) {
        div {
            width: 100%;
        }
    }
`;