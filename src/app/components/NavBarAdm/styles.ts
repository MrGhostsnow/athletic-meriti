import styled from "styled-components";

export const ContainerNavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: start;
    padding: 10px 20px;
    width: 100%;
    height: 160px;
    z-index: 2;
`;

export const Logo = styled.div`
    
`;

export const SectionLinks = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin-top: 50px;
    width: 60%;
    font-size: 24px;
;
`;

export const StyledLink = styled.p`
    background-color: #D9D9D9;
    color: #77BD10;
    border-radius: 12px;
    padding: 10px;
    text-decoration: none;
    width: 250px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`;
