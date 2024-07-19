"use client";
import { ContainerNavBar, Logo, SectionLinks, StyledLink } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const NavBar: React.FC = () => {
  return (
    <ContainerNavBar>
      <Logo>
        <Image src={logo} alt="Logo" width={280} height={280} />{" "}
      </Logo>
      <SectionLinks>
        <Link href="/" passHref>
          <StyledLink>CONHEÇA O ATHLETIC MERITI</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>PROJETOS E COTAÇÕES</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>CONTATO</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>DOE</StyledLink>
        </Link>
      </SectionLinks>
    </ContainerNavBar>
  );
};

export default NavBar;
