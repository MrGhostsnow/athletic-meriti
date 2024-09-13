"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import {
  FormContainer,
  SectionInput,
  SectionInputRow,
  Input,
  Select,
  Label,
  TextArea,
  Button,
  ErrorMessage,
} from "./styles";
import axios from "axios";

interface IFormInputs {
  proponente: string;
  fonteDeRecursos: string;
  valorDoProjeto: number;
  status: string;
  inicio: Date;
  fim: Date;
  local: string;
  numeroDeBeneficiarios: number;
  modalidadeEManifestacao: string;
  empresasParceiras: string;
  descricao: string;
  imagem?: string;
  type: string;
}

const schema = yup.object().shape({
  proponente: yup.string().required("Proponente é obrigatório"),
  fonteDeRecursos: yup.string().required("Fonte de Recursos é obrigatória"),
  valorDoProjeto: yup
    .number()
    .typeError("Valor do Projeto deve ser um número")
    .required("Valor do Projeto é obrigatório")
    .positive("O valor deve ser positivo"),
  status: yup
    .string()
    .required("Status é obrigatório")
    .oneOf(["aberto", "encerrado"], "Status inválido"),
  inicio: yup
    .date()
    .required("Data de Início é obrigatória")
    .typeError("Data de Início inválida"),
  fim: yup
    .date()
    .required("Data de Fim é obrigatória")
    .typeError("Data de Fim inválida"),
  local: yup.string().required("Local é obrigatório"),
  numeroDeBeneficiarios: yup
    .number()
    .typeError("Numero de Beneficiários deve ser um número")
    .required("Número de Beneficiários é obrigatório")
    .positive("O número deve ser positivo")
    .integer("O número deve ser um inteiro"),
  modalidadeEManifestacao: yup
    .string()
    .required("Modalidade e Manifestação é obrigatória"),
  empresasParceiras: yup.string().required("Empresas Parceiras é obrigatório"),
  descricao: yup.string().required("Descrição é obrigatória"),
  type: yup.string().default("Projeto"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const apiUrl = "https://back-athletic.onrender.com";

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/projetos`, data);
      console.log(response.data);
      router.push("/entrys");
    } catch (error) {
      console.error("There was an error creating the project!", error);
    }
  };

  return (
    <FormContainer>
      <h1>Novo Projeto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionInput>
          <Label>Proponente</Label>
          <Input {...register("proponente")} />
          <ErrorMessage>{errors.proponente?.message}</ErrorMessage>
        </SectionInput>

        <SectionInput>
          <Label>Fonte de Recursos</Label>
          <Input {...register("fonteDeRecursos")} />
          <ErrorMessage>{errors.fonteDeRecursos?.message}</ErrorMessage>
        </SectionInput>

        <SectionInputRow>
          <SectionInput>
            <Label>Valor do Projeto</Label>
            <Input type="number" {...register("valorDoProjeto")} />
            <ErrorMessage>{errors.valorDoProjeto?.message}</ErrorMessage>
          </SectionInput>

          <SectionInput>
            <Label>Status</Label>
            <Select {...register("status")}>
              <option value="aberto">Aberto</option>
              <option value="encerrado">Encerrado</option>
            </Select>
            <ErrorMessage>{errors.status?.message}</ErrorMessage>
          </SectionInput>
        </SectionInputRow>

        <SectionInputRow>
          <SectionInput>
            <Label>Início</Label>
            <Input type="date" {...register("inicio")} />
            <ErrorMessage>{errors.inicio?.message}</ErrorMessage>
          </SectionInput>

          <SectionInput>
            <Label>Fim</Label>
            <Input type="date" {...register("fim")} />
            <ErrorMessage>{errors.fim?.message}</ErrorMessage>
          </SectionInput>
        </SectionInputRow>

        <SectionInput>
          <Label>Local</Label>
          <Input {...register("local")} />
          <ErrorMessage>{errors.local?.message}</ErrorMessage>
        </SectionInput>

        <SectionInputRow>
          <SectionInput>
            <Label>Numero de Beneficiários</Label>
            <Input type="number" {...register("numeroDeBeneficiarios")} />
            <ErrorMessage>{errors.numeroDeBeneficiarios?.message}</ErrorMessage>
          </SectionInput>

          <SectionInput>
            <Label>Modalidade e Manifestação</Label>
            <Input {...register("modalidadeEManifestacao")} />
            <ErrorMessage>
              {errors.modalidadeEManifestacao?.message}
            </ErrorMessage>
          </SectionInput>
        </SectionInputRow>

        <SectionInput>
          <Label>Empresas Parceiras</Label>
          <Input {...register("empresasParceiras")} />
          <ErrorMessage>{errors.empresasParceiras?.message}</ErrorMessage>
        </SectionInput>

        <SectionInput>
          <Label>Descrição</Label>
          <TextArea {...register("descricao")} />
          <ErrorMessage>{errors.descricao?.message}</ErrorMessage>
        </SectionInput>

        <SectionInput>
          <Label>URL da Imagem</Label>
          <Input {...register("imagem")} />
          <ErrorMessage>{errors.imagem?.message}</ErrorMessage>
        </SectionInput>

        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
