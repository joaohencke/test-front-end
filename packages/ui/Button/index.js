import styled from 'styled-components';
import classnames from 'classnames';

const Button = styled.button.attrs((props) => ({
  className: classnames('btn', `btn-${props.variant}`, { 'btn-block': props.block }),
}))``;

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
