import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

// Define los componentes estilizados usando styled-components
export const TableContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #333;
  color: #fff;
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    background-color: #dc3545;
  }

  &:last-child:hover {
    background-color: #c82333;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
`