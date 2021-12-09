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
    }
`;

export const Item = styled.tr` 
    height: 3rem;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;

    td {
        width: 33.33%;
    }

    :hover {
            background-color: white;
        }
    
    img {
        height: 100%;
        margin: 0 1rem;
        :hover {
            cursor: pointer;
        }
    }
    
`