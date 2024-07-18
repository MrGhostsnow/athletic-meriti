import styled from "styled-components";
import backgroundImg from "../../../assets/bg-court.png";

export const ContainerOurMission = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
//   background-image: url(${backgroundImg.src}); 
//   background-size: cover;
//   background-repeat: no-repeat;
  
//   position: relative; 
  justify-content: space-between;
  background-color: #fff;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(rgba(201, 72, 0, 0.1), rgba(201, 72, 0, 0.1));
//     z-index: 1; 
//   }
`;

export const SectionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    border: 1px solid red;
    height: 350px;
`;

export const SectionText = styled.div`
    width: 50%;
    color: #000;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border: 1px solid red;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
`;

export const Text = styled.p`
    font-size: 24px;
    width: 100%;
    font-family: 'Inter';
    font-weight: 600;
`;

export const SectionImg = styled.div`
    width: 528px;
    height: 227px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const SectionPartner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 50%;
    border: 1px solid red;
    height: 185px;
    gap: 20px;
    font-family: 'Inter';
`;

export const Label = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #000;
`;

export const SpanHowWeWork = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    border: 1px solid red;
    position: relative;
    top: 0px;

    width: 750px;
    height: 109px;
    color: #000;
    border-radius: 24px;
    font-size: 50px;
    background-color: #77BD10;
`;












