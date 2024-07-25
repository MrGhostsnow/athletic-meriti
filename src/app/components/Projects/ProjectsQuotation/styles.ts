import styled from "styled-components";

export const ContainerProjectQuotation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    top: 0px;
    height: 100%;
    color: #000;
    border-radius: 24px;
    font-size: 50px;
    background-color: #000;
    padding: 60px 0;
`;


export const TitleProjectQuotation = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #fff;    

    @media (max-width: 425px) {
        font-size: 30px;
    }
`;