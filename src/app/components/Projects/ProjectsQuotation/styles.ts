import styled from "styled-components";
import backgroundImg from "../../../assets/bg-court-blue.png";

export const ContainerProjectQuotation = styled.div`
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
    padding: 60px 0;
    min-height: 500px
`;


export const TitleProjectQuotation = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff;    

    @media (max-width: 425px) {
        font-size: 30px;
    }
`;