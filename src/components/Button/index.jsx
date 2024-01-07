import P from 'prop-types';
import * as Styled from './styles';

const Button = ({ children, size = 'small', url }) => {
  return (
    <Styled.LinkContainer href={url}>
      <Styled.Button size={size}>{children}</Styled.Button>
    </Styled.LinkContainer>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'big']),
  url: P.string,
};

export default Button;
