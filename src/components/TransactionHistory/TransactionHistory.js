import { Columns, Container, Table } from "./TransactionHistory.styled";
import { TransactionHistoryItems } from "./TransactionHistoryItems";
import { Rows } from "./TransactionHistoryItems.styled";

export const TransactionHistory = ({ items }) => {
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <Columns>Type</Columns>
              <Columns>Amount</Columns>
              <Columns>Currency</Columns>
            </tr>
          </thead>

          <Rows>
            {items.map(({ id, type, amount, currency }) => (
              <TransactionHistoryItems
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            ))}
          </Rows>
        </Table>
      </Container>
    );
    
};























