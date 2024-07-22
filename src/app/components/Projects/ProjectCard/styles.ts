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
  background-color: #f7941d;
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

export const ToggleLink = styled.span`
  display: flex;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  width: 100px;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

export const Description = styled.p`
  margin-top: 0;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
`;

export const Info = styled.p`
  margin: 5px 0;
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  color: #333;
`;
