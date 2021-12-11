import styled from "styled-components";
import Tabua from "./../../imgs/navbarImg.jpg"

export const Container = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-image: url(${Tabua});
    background-size: contain;
    background-repeat: repeat;
    flex-flow: row-reverse wrap;
    
    div {
        display: flex;
        align-content: center;
        text-align: center;
        height: 100%;
    }

    img{
        margin-left: 84px;
        width: auto;
        height: 6.5rem;
        order: 0;
    }

    a{
        text-Decoration: none;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;

        color: #FBE4FF;
    }

    .nav-middle{
        justify-content: space-around;
        width: 75%;
        height: 100%;
        order: -1;
        flex-wrap: wrap-reverse;
        a{
            padding: 0px 50px;
        }
    }
    .nav-right{
        margin-right: 72px;
        justify-self: flex-end;
        order: -2;
    }
    
    .nav-list{
    }
    
    a:hover{
        cursor: pointer;
        background-color: rgba(70, 70, 70, 0.4);
        border-radius: 13px;
        transition: 500ms ease;
    }

    @media only screen and (max-width: 1100px) {
        a{
            font-size: 2rem;
        }

        .nav-middle{
            width: 100%;
        }
        img {
            position: absolute;
            left: 1rem;
            top: 0;
            margin: 0;
            height: 4rem;
        }
    }
    @media only screen and (max-width: 46.625rem) {
        a{
            font-size: 1.8rem;
        }

        .nav-middle{
            width: 100%;
        }
        .nav-right{
            margin-right: 2rem;
        }
    }
`;