"use client";
import React from "react";
import { ContainerNavBar, Logo, SectionLinks, StyledLink } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import bgNav from "../../assets/bg-nav.png";

interface NavBarProps {
  color: string;
  bgNavBar: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ color, bgNavBar }) => {
  return (
    <ContainerNavBar
      style={{
        backgroundImage: bgNavBar ? `url(${bgNav.src})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Logo>
        <Image src={logo} alt="Logo" width={200} height={200} />
      </Logo>
      <SectionLinks style={{ color }}>
        <Link href="/" passHref>
          <StyledLink>CONHEÇA O ATHLETIC MERITI</StyledLink>
        </Link>
        <Link href="/project" passHref>
          <StyledLink>PROJETOS E COTAÇÕES</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>CONTATO</StyledLink>
        </Link>
        <Link href="/beADonor" passHref>
          <StyledLink>DOE</StyledLink>
        </Link>
      </SectionLinks>
    </ContainerNavBar>
  );
};

export default NavBar;
