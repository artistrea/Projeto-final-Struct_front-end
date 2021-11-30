import styled from "styled-components";

export const Container = styled.div `
    position: relative;
    width: 72.813rem;
    height: 5.563rem;
    align-content: center;
    margin: auto 0 auto;
    display: flex;
    margin: 11.313rem auto 0 auto;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;

    background: #B6A8FF;
    border-radius: 0px 52px 52px 52px;

    button {
        min-width: 12.5rem;
        background-color: #B6A8FF;
        cursor: pointer;
        font-family: Roboto;
        font-style: normal;
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
`;