import styled from "styled-components";

export const SpanChoose = styled.span`
    position: absolute;
    top: 1400px;
    color: #fff;
    background-color: #77BD10;
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 28px;

    @media (max-width: 1024px) {
        top: 1500px;
    }

    @media (max-width: 425px) {
        top: 1300px;
    }
`;


export const ContainerChooseDonate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 350px;
    background-color: #fff;
    background-color: #FA9E41;
    border-radius: 24px;
    margin-bottom: 50px;

    @media (max-width: 1024px) {
        height: 300px;
    }

    @media (max-width: 768px) {
        height: 450px;
    }

    @media (max-width: 425px) {
        height: 500px;
        width: 90%;
    }
`;


export const SectionOptions = styled.section`
    display: flex;
    width: 90%;
    height: 200px;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }
`;


export const Option = styled.div`
    
`;


export const TitleOption = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin-left: 10px;
`;


export const Infos = styled.div`    
    background-color: #CDCFCD;
    width: 400px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    text-align: start;
    gap: 10px;

    @media (max-width: 1024px) {
        width: 300px;
    }
`;


export const Info = styled.p`
    font-family: 'Inter', sans-serif;
    color: #000;
`;


export const ButtonDonate = styled.button`
    background-color: #16A5F0;
    color: #fff;
    font-size: 18px;
    width: 220px;
    height: 50px;
    border-radius: 18px;
    border: 0;
`;