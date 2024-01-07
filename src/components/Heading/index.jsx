import P from 'prop-types';
import * as Styled from './styles';

const Heading = ({ children, isdark = true }) => {
  return <Styled.Title isdark={isdark}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node,
  isdark: P.bool,
};

export default Heading;
