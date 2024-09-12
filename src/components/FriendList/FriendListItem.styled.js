import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 40px;

`;

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
  align-items: center;
  max-width: 100px;
  border-radius: 5%;
  width: 200px;
  
`;

export const Name = styled.p`
  font-size: 32px;
  margin: 5px 0;  
  
`;

export const Status = styled.p`
  font-size: 24px;
  color: ${props => (props.isOnline ? 'green' : 'red')};
  margin: 5px 0;
`;
