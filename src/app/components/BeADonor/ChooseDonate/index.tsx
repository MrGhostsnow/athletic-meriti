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
  return (
    <ContainerChooseDonate>
      <SpanChoose>ESCOLHA COMO DOAR</SpanChoose>
      <SectionOptions>
        <Option>
          <TitleOption>PIX</TitleOption>
          <Infos>
            <Info>Chave PIX: sikdjfjsdifosijfioejfoiejf</Info>
            <Info>Associação Desportiva Athletic Meriti</Info>
            <Info>CNPJ 33.708.448/0001-13</Info>
          </Infos>
        </Option>
        <Option>
          <TitleOption>CARTÕES OU ASSINATURA</TitleOption>
          <Infos>
            <Info style={{ fontWeight: "800" }}>
              <strong>Contribua através do Catarse</strong>
            </Info>
            <ButtonDonate>CLIQUE AQUI</ButtonDonate>
          </Infos>
        </Option>
      </SectionOptions>
    </ContainerChooseDonate>
  );
};

export default ChooseDonate;
