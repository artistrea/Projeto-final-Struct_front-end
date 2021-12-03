import styled from 'styled-components'
import TesteOfertona from './../../imgs/TesteOfertona.png'
//todo: background
export const Container = styled.div`
    position: relative;
    max-width: 70.7rem;
    height: 28.125rem;
    margin: 14.188rem auto 0 auto;
    overflow: hidden;
    border-radius: 25px;
    img {
        width: 100%;
        object-fit: contain;
        object-position: right;
    }

    @media only screen and (max-width: 745px) {
        img {
            display: none;
        }
        height: 33.125rem;
        background-image: url(${TesteOfertona});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 2.188rem 0 0 0;
    }
`;