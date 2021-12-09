import styled from "styled-components";

export const Container = styled.table`
    display: flex;
    flex-direction: column;
    width: 54.5rem;
    height: 53.125rem;
    background-color: rgba(199, 255, 255, 0.95);
    align-items: center;
    overflow-y: scroll;
    border-radius: 0px 50px 50px 0px;

    tbody{
        width: 100%;
    }
    
    ::-webkit-scrollbar {
        width: 3rem;
        overflow: hidden;
        background: rgba(199, 255, 255);
        border-radius: 0px 50px 50px 0px;
    }

    ::-webkit-scrollbar-corner{
        display: none;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: rgba(199, 255, 255);
        border-radius: 0px 50px 50px 0px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(109, 205, 255, 0.95);
        border-radius: 0px 50px 50px 0px;
        width: 1rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(109, 205, 255, 0.95);
        overflow: hidden;
    }
    @media only screen and (max-width: 55rem){
        width: 90%;
        height: 100vh;
        margin: 0;
        overflow-x: scroll;
    }   
`;

export const Item = styled.tr` 
    height: 7rem;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    

    td {
        height: 100%;
        width: 20%;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    :hover {
            background-color: white;
        }
    
    img {
        height: 45%;
        max-width: 100%;
        margin: 0 2.5%;
        :hover {
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 55rem){
        height: 9rem;
    }
    @media only screen and (max-width: 600px){
        font-size: 14px;
        height: 9rem;
        width: 25rem;
        .name, .description{
            width: 30%;
        }
        .price{
            width: 15%;
        }
        .cat-id{
            width: 10%;
        }
        
        .options{
            width: 15%;
        }
    }   
`