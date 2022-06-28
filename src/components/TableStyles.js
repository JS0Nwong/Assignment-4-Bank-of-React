import styled from "styled-components";

const TableContainer = styled.div`
  overflow: auto;
  max-height: 250px;
  margin: 2em;
`;

const TableHeadData = styled.th`
  position: sticky;
  top: 0;
  background-color: white;
  text-align: center;
  font-size: 3ch;
`;

const TableData = styled.td`
  padding: 0 3rem;
  text-align: center;
  font-size: 2ch;
`;

export { TableContainer, TableHeadData, TableData };
