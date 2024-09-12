import {
  SpanChoose,
  ContainerChooseDonate,
  SectionOptions,
  Option,
  TitleOption,
  Infos,
  Info,
  ButtonDonate,
} from "./styles";

const ChooseDonate: React.FC = () => {
  const handleRedirect = () => {
    window.open("https://www.catarse.me/AthleticMeriti", "_blank");
  };

  return (
    <ContainerChooseDonate>
      <SpanChoose>ESCOLHA COMO DOAR</SpanChoose>
      <SectionOptions>
        <Option>
          <TitleOption>PIX</TitleOption>
          <Infos>
            <Info>Chave PIX: CNPJ 33.708.448/0001-13</Info>
            <Info>Associação Desportiva Athletic Meriti</Info>
          </Infos>
        </Option>
        <Option>
          <TitleOption>CARTÕES OU ASSINATURA</TitleOption>
          <Infos>
            <Info style={{ fontWeight: "800" }}>
              <strong>Contribua através do Catarse</strong>
            </Info>
            <ButtonDonate onClick={handleRedirect}>CLIQUE AQUI</ButtonDonate>
          </Infos>
        </Option>
      </SectionOptions>
    </ContainerChooseDonate>
  );
};

export default ChooseDonate;
