import styled from 'styled-components';

const Table = styled.table.attrs({ className: 'table table-striped' })``;

Table.TH = styled.th`
  cursor: ${(props) => (props.clickable ? 'pointer' : 'initial')};
`;

export default Table;
