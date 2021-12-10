import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(197, 248, 245, 0.71);
    height: 53.125rem;
    width: 29.75rem;
    margin: 6.25rem 0 12.5rem 2rem;
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
            width: inherit;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        a{
            width: inherit;
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
            width: inherit;
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
`;