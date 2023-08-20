import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 30%;
  color: #333;
  text-transform: capitalize;
  text-align: left;
  overflow: hidden;
  box-shadow: ${p => p.theme.boxSh.one}, ${p => p.theme.boxSh.two},
    ${p => p.theme.boxSh.three};
  border-radius: ${p => p.theme.borRad};

  th {
    background-color: green;
    color: ${p => p.theme.colors.white};
    padding: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #ccc;
    padding-left: ${p => p.theme.spacing(1)};
    svg {
      margin-right: ${p => p.theme.spacing(1)};
    }
  }

  tr:nth-child(even) td {
    background-color: #f2f2f2;
  }

  tr:hover td {
    background-color: #ffedcc;
  }

  td {
    background-color: ${p => p.theme.colors.white};
    border-bottom: 1px solid #ccc;
    padding-left: ${p => p.theme.spacing(2)};
  }
`;
