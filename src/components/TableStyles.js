import styled from "styled-components";

const TableContainer = styled.div`
  overflow: auto;
  max-height: 350px;
  margin: 2em;
  display: flex;
  flex-direction: column;
`;

const TableHeadData = styled.th`
  position: sticky;
  top: 0;
  background-color: #E9ECEF;
  text-align: center;
  font-size: 3ch;
  border: 1px solid gray;
`;

const TableData = styled.td`
  padding: .4rem 0rem;
  text-align: center;
  font-size: 2ch;
  border: 1px solid gray;
`;

export { TableContainer, TableHeadData, TableData };
