"use client";
import React, { useState } from "react";
import {
  ContainerNavBar,
  Logo,
  SectionLinks,
  StyledLink,
  MobileMenuButton,
  MobileMenu,
  CloseButton,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import bgNav from "../../assets/bg-nav.png";

const NavBarAdm: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <ContainerNavBar
        style={{
          backgroundImage: `url(${bgNav.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Logo>
          <Link href="/" passHref>
            <Image src={logo} alt="Logo" width={200} height={200} />
          </Link>
        </Logo>
        <SectionLinks>
          <Link href="/newProject" passHref>
            <StyledLink>NOVO PROJETO</StyledLink>
          </Link>
          <Link href="/newQuotation" passHref>
            <StyledLink>NOVA COTAÇÃO</StyledLink>
          </Link>
          <Link href="/entrys" passHref>
            <StyledLink>VER TUDO</StyledLink>
          </Link>
        </SectionLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
      </ContainerNavBar>
      {isMobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
          <Link href="/newProject" passHref>
            <StyledLink onClick={toggleMobileMenu}>NOVO PROJETO</StyledLink>
          </Link>
          <Link href="/newQuotation" passHref>
            <StyledLink onClick={toggleMobileMenu}>NOVA COTAÇÃO</StyledLink>
          </Link>
          <Link href="/entrys" passHref>
            <StyledLink onClick={toggleMobileMenu}>VER TUDO</StyledLink>
          </Link>
        </MobileMenu>
      )}
    </>
  );
};

export default NavBarAdm;
