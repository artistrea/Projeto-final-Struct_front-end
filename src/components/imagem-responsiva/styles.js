import styled from "styled-components";

export const Container = styled.div`
    
    display: none;

    @media only screen and (max-width: 1007px) {
        display: block;
        position: relative;
        bottom: 0;
        width: 100%;
        padding-left: auto;
        max-height: 40%;
        align-self: flex-end;

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
`;