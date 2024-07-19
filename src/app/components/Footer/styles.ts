import styled from "styled-components";
import bgfooter from "../../assets/bg-footer.png";

export const ContainerFooter = styled.footer`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgfooter.src}); 
    background-size: cover;
    background-repeat: no-repeat;

    position: relative; 
    justify-content: center;
    background-color: #fff;
`;


export const SectionInfos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;


export const SectionMidia = styled.section` 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`  ;


export const SectionText = styled.section`      
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;


export const NameRigths = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    font-family: 'Inter', sans-serif;
`;


export const NumberInfo = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #fff;    
    font-family: 'Inter', sans-serif;
`;