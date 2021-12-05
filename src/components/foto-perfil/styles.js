import styled from "styled-components";

export const Container = styled.div`
    margin: auto; //Mudar para centralizar a posição da imagem
    width: 20.25rem;
    height: 20.25rem;
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    .foto {
        display: inline;
        margin: 0 auto;
        margin-left: -18%; //Mudar para centralizar a imagem
        height: 100%;
        width: auto;
    }
`;