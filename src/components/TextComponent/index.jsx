import P from 'prop-types';
import * as Styled from './styles';

const TextComponent = ({ children }) => {
  return <Styled.Text>{children}</Styled.Text>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};

export default TextComponent;
