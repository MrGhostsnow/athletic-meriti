import styled from "styled-components";
import backgroundImg from "../../../assets/bg-court-blue.png";

export const ContainerTeamHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  background-image: url(${backgroundImg.src}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative; 
`;


export const TitleTeamHistory = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #000;  
  margin-top: 80px;
`;


export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 1000px;
  

  @media (max-width: 1024px) {
    height: 1250px;
  }

  @media (max-width: 768px) {
   height: 750px;
  }

  @media (max-width: 425px) {
    height: 1090px;
  }
`;


export const TextContent = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #000;
  width: 50%;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 25px;
    width: 90%;
    text-align: center;
  }

  @media (max-width: 425px) {
    width: 90%;
    text-align: center;
  }
`;


export const SectionImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
`;

export const VectorImg = styled.span`
    // background-color: #83CAEF;
    height: 1100px;
    width: 600px;

`;