import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: wrap;
    max-width: 72.813rem;
    min-height: 22.8rem;
    background: #87C6EA;
    margin: 1.875rem auto 0;
    position: relative;
    justify-content: space-around;
    border-radius: 20px;
    padding-top: 0.5rem;

    hr {
        flex-basis: 100%; 
        height: 0; 
        margin: 0; 
        border: 0;
    }

    .slogan {
        border-radius: 0 0 20px 20px;
        position: relative;
        justify-self: flex-end;
        width: 100%;
        min-height: 3.25rem;
        background: #705B7E;
        bottom: 0;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;
        padding-top: 0.7rem;
    }

`;