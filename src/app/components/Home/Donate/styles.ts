import styled from "styled-components";
import bgdonate from "../../../assets/bg-donate.png";


export const ContainerDonate = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgdonate.src}); 
    background-size: cover;
    background-repeat: no-repeat;
    position: relative; 
    justify-content: start;
    background-color: #fff;
`;

export const SectionDonate = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 24px;
    margin-top: 90px;
    background-color: #fff;
    height: 550px;
    width: 80%;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TextDonate = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: #000;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        height: 300px;
    }
`;

export const TitleDonate = styled.h2`
    font-size: 32px;
    font-weight: 700;
    color: #000;
`;

export const DescriptionDonate = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #000;
`;

export const SectionButtonDonate = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    height: 200px;
    justify-content: center;
    align-items: center;
`;

export const ButtonDonate = styled.button`
    color: #000;
    font-size: 18px;
    font-weight: 700;
    width: 280px;
    height: 80px;
    border-radius: 24px;
    border: 0;
    cursor: pointer;
    z-index: 2;
    font-family: "Keania One";
`;

