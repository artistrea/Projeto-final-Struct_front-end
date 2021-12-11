import styled from "styled-components";
import Tabua from "./../../imgs/navbarImg.jpg"

export const Container = styled.nav`
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 104px;

    background-image: url(${Tabua});
    background-size: 100% 100%;
    //background-color: pink;
    text-align:center;
    
    img{
        margin-left: 84px;
        width: auto;
        height: 104px;
    }

    a{
        text-Decoration: none;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 18px;

        color: #FBE4FF;
    }

    .nav-middle a{
        padding: 0px 104px;
    }
    
    .nav-right{
        margin-right: 72px;
    }
    
    .nav-list{
        margin-top: 39px;
    }
    
    a:hover{
        cursor: pointer;
        background-color: rgba(70, 70, 70, 0.4);
        border-radius: 13px;
        transition: 500ms ease;
    }
`;