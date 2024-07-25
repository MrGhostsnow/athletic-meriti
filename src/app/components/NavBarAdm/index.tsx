"use client";
import { ContainerNavBar, Logo, SectionLinks, StyledLink } from "./styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import bgNav from "../../assets/bg-nav.png";

const NavBarAdm: React.FC = () => {
  return (
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
    </ContainerNavBar>
  );
};

export default NavBarAdm;
