import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    position: static;
    width: 79rem;
    flex-flow: row wrap;
    margin: 0 auto;
    @media only screen and (max-width: 1000px) {
        width: 40rem;        
    }

    @media only screen and (max-width: 630px) {
        width: 30rem;
    }
    @media only screen and (max-width: 350px) {
        width: 20rem;
    }
`;