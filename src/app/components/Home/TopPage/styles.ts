import styled from "styled-components";
import backgroundImg from "../../../assets/bg-toppage.png";

export const ContainerTopPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImg.src}); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    height: 100vh; 


    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(119, 189, 16, 0.67), rgba(119, 189, 16, 0.67));
        z-index: 1; 
      }
`;


export const SectionHeaderPage = styled.section`
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 10px;
      width: 80%;
      height: 60%;
      color: white;
      font-size: 24px;

      @media (max-width: 768px) {
        width: 90%;
      }
`;

export const NamePage = styled.h1`
      font-size: 42px;
      color: #000;
`;

export const DescriptionPage = styled.p`
      color: #ff;
      font-size: 72px;
      width: 80%;

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 425px) {
        font-size: 56px;
      }
`;

export const ButtonPage = styled.p`
      width: 300px;
      height: 50px;
      background-color: #16A5F0;
      color: #000;
      border-radius: 24px;
      border: none;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 425px) {
        font-size: 18px;
      }
`;