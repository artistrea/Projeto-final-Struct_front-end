import styled from "styled-components";

export const Container = styled.div `
    position: relative;
    max-width: 72.813rem;
    min-height: 5.563rem;
    display: flex;
    place-content: center;
    flex-wrap: wrap;
    margin: 11.313rem auto;
    padding: 0 1rem;
    background: #B6A8FF;
    border-radius: 0px 52px 52px 52px;

    button {
        height: 5.563rem;
        width: 12.5rem;
        margin: 0 auto;
        background-color: #B6A8FF;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 1.125rem;
        border-radius: 6.25rem;
        border: none;
        justify-content: space-between;
    }

    button:hover {
        background-color: #8172D3;
    }

    @media only screen and (max-width: 480px) {
        width: 13rem;
        button {
        height: 3.563rem;
        }
    }
`;