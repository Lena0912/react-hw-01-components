import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  max-width: 100%;
  text-align: center;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;
export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  width: 200px;
  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  color: beige;
  border: 1px solid green;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  color: red;
  gap: 20px;

  font-weight: ${props => {
    switch (props.type) {
      case 'a':
        return 800;
      case 'b':
        return 400;
      case 'c':
        return 400;
      default:
        return null;
    }
  }};
`;

export const Socail = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  padding: 20px;
  
  max-width: 300px;
  
`;

export const Media = styled.li`
  display: flex;
  justify-content: center;
  color: orange;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  min-width: 80px;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  
`;

export const Span = styled.span`
  font-weight: ${props => {
    switch (props.type) {
      case 'w':
        return 800;
      case 'q':
        return 500;
      default:
        return null;
    }
  }};
`;
