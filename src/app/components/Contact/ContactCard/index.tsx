import Image from "next/image";
import {
  ContainerContactCard,
  TitleContactCard,
  SectionImage,
  Title,
  TextContactCard,
  ButtonContactCard,
  InfoContact,
} from "./styles";

interface ContactCardProps {
  logo: string;
  title: string;
  text: string;
  info?: string;
  isButton: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  logo,
  title,
  text,
  info,
  isButton,
}) => {
  return (
    <ContainerContactCard>
      <TitleContactCard>
        <SectionImage>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </SectionImage>
        <Title>{title}</Title>
      </TitleContactCard>
      <TextContactCard>{text}</TextContactCard>
      {isButton ? (
        <ButtonContactCard>FALE PELO WHATSAPP</ButtonContactCard>
      ) : (
        <InfoContact>{info}</InfoContact>
      )}
    </ContainerContactCard>
  );
};

export default ContactCard;
