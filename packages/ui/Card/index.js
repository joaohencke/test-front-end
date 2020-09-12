import styled from 'styled-components';

const Card = styled.div.attrs({
  className: 'card',
})``;

Card.Image = styled.img.attrs({}).attrs((props) => {
  if (props.thumbnail) {
    const { url } = props.thumbnail;
    return {
      src: url,
    };
  }
  return {};
})``;

Card.Body = styled.div.attrs({
  className: 'card-body',
})``;

Card.Title = styled.h5.attrs({
  className: 'card-title',
})``;

Card.Subtitle = styled.h6.attrs({
  classname: 'card-subtitle',
})`
  flex: 0;
  text-overflow: ellipsis;
`;

export default Card;
