import styled from "styled-components";

export const Container = styled.button `
    width: 13.438rem;
    max-width: 100%;
    min-height: 4.313rem;
    margin: 4rem auto 0 auto;
    background: #072864;
    color: white;
    font-family: roboto;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 20px;
    font-weight: bold;
    display: flex;
    place-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-overflow: ellipsis;

    :hover {
        border: 2px;
        border-color: red;
    }
`;