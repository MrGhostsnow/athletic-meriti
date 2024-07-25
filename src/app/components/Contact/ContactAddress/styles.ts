import styled from "styled-components";

export const ContainerContactAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    height: 100%;
    color: #000;
    border-radius: 24px;
    font-size: 50px;
    background-color: #000;
    padding: 60px 0;


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