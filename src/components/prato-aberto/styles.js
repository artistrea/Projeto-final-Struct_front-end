import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 35rem;
    height: 25rem;
    margin: 2.25rem;
    border-radius: 25px;
    overflow: hidden;
    
    :hover{
        cursor: pointer;
    }
    
    div{
        color: white;
        background-color: #464348;
    }
    #name{
        height: 3.5rem;
        display: flex;
        place-content: center;
        font-weight: bold;
        font-size: 2.5rem;
        p{
            margin: 0;
        }
    }
    #description{
        height: 8rem;
        font-weight: bold;
        font-size: 1.5rem;
        p{
            margin: 0 1rem;
            text-align: center;
        }
    }
    img{
        object-fit: cover;
        overflow: hidden;
        height: 13.5;
    }
    #estrela{
        z-index: 1;
        position: absolute;
        top: 0;
        right: 1.5rem;
        height: 2.75rem;
    }

    #prato_aberto {
        
    }
`;