import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';

const LogoLink = ({ text, srcImg, link }) => {
  return (
    <Heading>
      <Styled.Container href={link}>
        {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};

export default LogoLink;
