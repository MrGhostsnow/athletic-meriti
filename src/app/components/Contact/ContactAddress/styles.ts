import styled from "styled-components";
import backgroundImg from "../../../assets/bg-court-blue.png";

export const ContainerContactAddress = styled.div`
    gap: 60px;
    height: 100%;
    color: #000;
    font-size: 50px;
    padding: 60px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImg.src}); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative; 
    justify-content: space-between;
    background-color: #fff;


`;

export const ContainerCards = styled.div`
    display: flex;
    width: 80%;
    height: 400px;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1024px) {
        width: 95%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        gap: 25px;
    }
`;


export const TitleContactAddress = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff;

`;