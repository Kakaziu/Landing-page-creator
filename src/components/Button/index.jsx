import P from 'prop-types';
import * as Styled from './styles';

const Button = ({ children, size = 'small', urlButton = '#' }) => {
  return (
    <Styled.LinkContainer href={urlButton}>
      <Styled.Button size={size}>{children}</Styled.Button>
    </Styled.LinkContainer>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  size: P.oneOf(['small', 'big']),
  urlButton: P.string,
};

export default Button;
