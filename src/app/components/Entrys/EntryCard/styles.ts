import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 900px;
  height: auto;
  margin: 20px;
`;

export const Header = styled.div`
  background-color: #D9D9D9;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  color: #000;
`;

export const Type = styled.p`
  margin: 0;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  color: #000;
`;

export const Status = styled.span`
  display: flex;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 24px;
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
`;
