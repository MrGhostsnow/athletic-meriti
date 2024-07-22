import styled from "styled-components";

export const ContainerContactCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color: #FA9E41;
    border-radius: 24px;
    gap: 20px;
`;

export const TitleContactCard = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SectionImage = styled.div`
    border-radius: 50%;
    background-color: #D9D9D9;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.p`
    font-size: 24px;
`;

export const TextContactCard = styled.p`
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    text-align: center;
    width: 80%;
`;

export const ButtonContactCard = styled.button`
    background-color: #16A5F0;
    border: none;
    width: 250px;
    height: 50px;
    border-radius: 16px;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    color: #fff;
    cursor: pointer;
`;

export const InfoContact = styled.p`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
`;