import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    p {
        color: white;
        margin: 0;
        font-size: 2.5rem;
        font-family: Roboto;
        text-align: center;
    }   
    a {
        margin: 2rem 0 0 0;
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        font-family: Roboto;
        text-align: center;
        text-decoration: initial;
        :hover {
            cursor: pointer;
        }
    }

    
`;