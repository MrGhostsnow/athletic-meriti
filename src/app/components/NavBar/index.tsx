import React, { useState } from "react";
import {
  ContainerNavBar,
  Logo,
  SectionLinks,
  StyledLink,
  MenuButton,
  OverlayMenu,
  OverlayLink,
  CloseButton,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import bgNav from "../../assets/bg-nav.png";

interface NavBarProps {
  color: string;
  bgNavBar: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ color, bgNavBar }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <ContainerNavBar
        style={{
          backgroundImage: bgNavBar ? `url(${bgNav.src})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Logo>
          <Image src={logo} alt="Logo" width={180} height={180} />
        </Logo>
        <SectionLinks>
          <Link href="/" passHref>
            <StyledLink style={{ color }}>CONHEÇA O ATHLETIC MERITI</StyledLink>
          </Link>
          <Link href="/project" passHref>
            <StyledLink style={{ color }}>PROJETOS E COTAÇÕES</StyledLink>
          </Link>
          <Link href="/contact" passHref>
            <StyledLink style={{ color }}>CONTATO</StyledLink>
          </Link>
          <Link href="/beADonor" passHref>
            <StyledLink style={{ color }}>DOE</StyledLink>
          </Link>
        </SectionLinks>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </ContainerNavBar>
      <OverlayMenu open={menuOpen}>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <Link href="/" passHref>
          <OverlayLink>CONHEÇA O ATHLETIC MERITI</OverlayLink>
        </Link>
        <Link href="/project" passHref>
          <OverlayLink>PROJETOS E COTAÇÕES</OverlayLink>
        </Link>
        <Link href="/contact" passHref>
          <OverlayLink>CONTATO</OverlayLink>
        </Link>
        <Link href="/beADonor" passHref>
          <OverlayLink>DOE</OverlayLink>
        </Link>
      </OverlayMenu>
    </>
  );
};

export default NavBar;
