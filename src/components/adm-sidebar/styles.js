import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(197, 248, 245, 0.71);
    height: 53.125rem;
    width: 29.75rem;
    margin: 6.25rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .top{
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        width: 29rem;
        padding: 0.75rem;
        text-align: center;
        p{
            font-weight: normal;
            margin: 0.5rem 0;
            font-size: 1.8rem;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        a{
            width: 100%;
            font-weight: bold;
            padding: 1rem 0;
            font-size: 1.6rem;
            text-decoration: none;
            color: black;
            :hover {
                background-color: #AEE0DDB5;
            }
        }
    }
    .bottom {
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
        max-width: 29rem;
        overflow: hidden;
        a{
            width: 100%;
            font-weight: bold;
            padding: 1rem 0;
            font-size: 1.6rem;
            text-decoration: none;
            color: black;
            text-align: center;
            :hover {
                background-color: #AEE0DDB5;
            }
        }
    }

    @media only screen and (max-width: 1347px) {
        border-top-right-radius: 50px;
    }

    @media only screen and (max-width: 476px) {
        width: 100%;
        .top{
            width: 100%;
        }
        .bottom{
            width: 100%;
        }
    }
`;