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
    
    
    
    div{
        color: white;
        background-color: #464348;
    }
    #name{
        height: 7rem;
        display: flex;
        place-content: center;
        font-weight: bold;
        font-size: 2.5rem;
        overflow: hidden;
        p{
            display: flex;
            flex-wrap: wrap;
            margin: auto 4rem auto 2rem;
        }
    }
    #description{
        height: 7rem;
        font-weight: bold;
        font-size: 1.5rem;
        text-overflow: ellipsis;
        p{
            margin: 0.5rem 1rem;
            text-align: left;
        }
    }
    img{
        object-fit: cover;
        overflow: hidden;
        height: 11rem;
    }
    #estrela{
        z-index: 1;
        position: absolute;
        top: 0;
        right: 1.5rem;
        height: 2.75rem;
        :hover{
        cursor: pointer;
    }
    }
    #price{
        font-size: 1.5rem;
        position: absolute;
        right: 1.5rem;
        bottom: 0;
        padding: 0 1rem 0 0 ;
        background-color:  #464348;
    }

    @media only screen and (max-width: 630px) {
        max-width: 20rem;
        margin: 2.25rem auto;
        #name{
            height: 4rem;
            font-size: 1.5rem;
        }
        #estrela{
            height: 2rem;
        }
        #description{
            height: 6rem;
            font-size: 1rem;
        }
        img {
            height: 15rem;
        }
        #price{
            font-size: 1rem;
            right: 0;
        }
    }

    @media only screen and (max-width: 350px) {
        width: 15rem;
        height: 12rem;
        margin: 2.25rem auto;
        #name{
            font-size: 0.8rem;
        }
        #description{
            font-size: 0.8rem;
            font-weight: normal;
            p{
                margin: 0 0.5rem;
            }
        }
        #price{
            font-size: 0.8rem;
            right: 0;
        }
        #estrela{
            right: 1rem;
            height: 1.3rem;
        }
        
    }
`;