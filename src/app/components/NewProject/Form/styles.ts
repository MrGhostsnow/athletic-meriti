import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const SectionInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 650px;
  gap: 5px;

  @media (max-width: 425px) {
    width: 350px;
  }
`;

export const SectionInputRow = styled.div`
  display: flex;
  align-items: start;
  width: 650px;
  gap: 10px;

  @media (max-width: 425px) {
    width: 350px;
    flex-direction: column;
  }
`;


export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: #CDCFCD;
  color: #000;
  padding: 0 10px;
  outline: none;
`;


export const Select = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: #CDCFCD;
  color: #000;
  padding: 0 10px;
  outline: none;
`;

export const Label = styled.label`
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  border-radius: 12px;
  border: none;
  background-color: #CDCFCD;
  color: #000;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #77BD10;
  color: #fff;
  font-size: 18px;
  width: 180px;
  height: 50px;
  border-radius: 18px;
  border: 0;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;
