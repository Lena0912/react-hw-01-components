
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;


export const Table = styled.table`

  border: 1px solid darkgrey;
  table-layout: fixed;
  width: 600px;
  margin-bottom: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

export const Columns = styled.th`
font-size: 20px;
font-weight: 600;
text-transform: uppercase;
padding: 5px;
color: ivory;
background-color: rgb(55, 172, 172);
border: 1px solid rgb(8, 53, 53);

.transactionHistory tbody tr:nth-child(odd) {
background-color: darkgrey;
}
.transactionHistory tbody tr:nth-child(even) {
    background-color: rgb(245, 239, 239);
}
`;