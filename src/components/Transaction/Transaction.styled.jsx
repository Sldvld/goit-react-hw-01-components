import styled from '@emotion/styled';

export const TableHeader = styled.th`
  padding: 10px 20px;
  color: white;
  border: 1px solid #212a48;
`;
export const TransactionTable = styled.table`
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 10px 10px 20px #333333;
  border-collapse: collapse;
  thead {
    background-color: #545c94;
  }

  tr:nth-child(2n) {
    background-color: #9394eb;
    color: #333333;
  }
  td {
    border: 1px solid #545c94;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
  }
`;
