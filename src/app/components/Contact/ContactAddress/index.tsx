import ContactCard from "../ContactCard";
import {
  ContainerContactAddress,
  TitleContactAddress,
  ContainerCards,
} from "./styles";
import wppIcon from "../../../assets/wpp-icon.png";
import emailIcon from "../../../assets/email-icon.png";
import mapIcon from "../../../assets/map-icon.png";

const ContactAddress: React.FC = () => {
  return (
    <ContainerContactAddress>
      <TitleContactAddress>FALE COM A GENTE</TitleContactAddress>
      <ContainerCards>
        <ContactCard
          logo={wppIcon.src}
          title="WHATSAPP"
          text="Horário de atendimento das 09h00 às 18h00"
          isButton
        />
        <ContactCard
          logo={emailIcon.src}
          title="E-MAIL"
          text="Quer apoiar algum projeto do Atlhetic Meriti? 
        Envie um e-mail para"
          isButton={false}
          info="contato@athleticmeriti.com.br"
        />
        <ContactCard
          logo={mapIcon.src}
          title="ENDEREÇO"
          text="Av. Comendador Teles, 2393 - Vilar dos Teles, São João de Meriti - RJ, 25561-161"
          isButton={false}
          info="Telefone (21) 99419-8950"
        />
      </ContainerCards>
    </ContainerContactAddress>
  );
};

export default ContactAddress;
