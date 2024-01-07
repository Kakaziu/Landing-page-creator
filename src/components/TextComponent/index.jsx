import P from 'prop-types';
import * as Styled from './styles';

const TextComponent = ({ children, isdark = true }) => {
  return <Styled.Text isdark={isdark}>{children}</Styled.Text>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  isdark: P.bool,
};

export default TextComponent;
