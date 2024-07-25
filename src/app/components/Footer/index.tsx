import {
  ContainerFooter,
  SectionInfos,
  SectionMidia,
  SectionText,
  NameRigths,
  NumberInfo,
} from "./styles";
import Image from "next/image";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <SectionInfos>
        <SectionText>
          <NameRigths>
            Associação Desportiva Athletic Meriti | Todos os Direitos Reservados
          </NameRigths>
          <NumberInfo>CNPJ 33.708.448/0001-13</NumberInfo>
        </SectionText>
        <SectionMidia>
          <a href="https://www.instagram.com/athleticmeriti/" target="_blank">
            <Image src={instagramIcon} alt="Logo" width={50} height={50} />
          </a>
          <a href="https://www.facebook.com/athleticmeriti/" target="_blank">
            <Image src={facebookIcon} alt="Logo" width={50} height={50} />
          </a>
          <a
            href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-desportiva-athletic-meriti/?originalSubdomain=br"
            target="_blank"
          >
            <Image src={linkedinIcon} alt="Logo" width={50} height={50} />
          </a>
        </SectionMidia>
      </SectionInfos>
    </ContainerFooter>
  );
};

export default Footer;
