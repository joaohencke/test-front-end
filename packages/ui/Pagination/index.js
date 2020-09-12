import styled from 'styled-components';

const Pagination = styled.ul.attrs({
  className: 'pagination',
})``;

Pagination.Item = styled.li.attrs({ className: 'page-item' })``;
Pagination.Link = styled.button.attrs({ className: 'btn-clear page-link' })``;

export default Pagination;
