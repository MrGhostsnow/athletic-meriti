"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  valorDoProjeto: number;
  status: string;
  inicio: Date;
  fim: Date;
  descricao: string;
  type: string;
}

const schema = yup.object().shape({
  proponente: yup.string().required("Proponente é obrigatório"),
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
  descricao: yup.string().required("Descrição é obrigatória"),
  type: yup.string().default("Cotação"),
});

const FormQuotation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/quotacoes",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error creating the project!", error);
    }
  };

  return (
    <FormContainer>
      <h1>Nova Cotação</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SectionInput>
          <Label>Proponente</Label>
          <Input {...register("proponente")} />
          <ErrorMessage>{errors.proponente?.message}</ErrorMessage>
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
          <Label>Descrição</Label>
          <TextArea {...register("descricao")} />
          <ErrorMessage>{errors.descricao?.message}</ErrorMessage>
        </SectionInput>

        <Button type="submit">Salvar</Button>
      </form>
    </FormContainer>
  );
};

export default FormQuotation;
