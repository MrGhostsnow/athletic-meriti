import styled from "styled-components";
import backgroundImg from "../../../assets/know-project.png";


export const ContainerKnowProject = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${backgroundImg.src}); 
background-size: cover;
background-repeat: no-repeat;
background-position: center; 
height: 100vh; 
`;

export const KnowTheProject = styled.p`
    background-color: #DD8934;
    color: #000;
    font-size: 34px;
    width: 800px;
    height: 100px;
    border-radius: 24px;
    border: 0;
    margin: -55px 0 30px 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 425px) {
        font-size: 24px;
    }
`;

export const TitleKnowProject = styled.h1`
    font-size: 24px;
    color: #FBF9F9;
    text-align: center;
    width: 930px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    font-family: 'Keania One', sans-serif;

    @media (max-width: 768px) {
        width: 90%;
    }
`