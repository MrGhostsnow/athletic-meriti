import styled from "styled-components";

export const ContainerNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 160px;
  z-index: 2;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div``;

export const SectionLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  font-size: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled.a`
    background-color: #D9D9D9;
    color: #77BD10;
    border-radius: 12px;
    padding: 10px;
    text-decoration: none;
    width: 250px;
    height: 50px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  a {
    color: #77BD10;
    font-size: 24px;
    margin: 20px 0;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
`;
