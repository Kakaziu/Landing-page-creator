import P from 'prop-types';
import * as Styled from './styles';

const Heading = ({
  children,
  isdark = true,
  as = 'h1',
  uppercase = false,
  size = 'medium',
}) => {
  return (
    <Styled.Title isdark={+isdark} as={as} uppercase={+uppercase} size={size}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  isdark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  uppercase: P.bool,
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
};

export default Heading;
