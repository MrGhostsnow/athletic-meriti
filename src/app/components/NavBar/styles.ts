import styled from "styled-components";

export const ContainerNavBar = styled.nav`
  display: flex;
  justify-content: space-between; /* Alinha logo e botão */
  align-items: center; /* Alinha items verticalmente */
  padding: 10px 20px;
  width: 100%;
  height: 160px;
  position: relative; /* Para o overlay */
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 0px;
  width: 80%;
  font-size: 24px;

  @media (max-width: 1024px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    display: none; /* Esconde os links no modo desktop */
  }
`;

export const StyledLink = styled.p`
  margin: 0;
  width: 250px;
  text-align: center;

  @media (max-width: 1024px) {
    width: 170px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const OverlayMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(44, 63, 14 , 0.9);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 3;
`;

export const OverlayLink = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 24px;
  margin: 10px;
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
