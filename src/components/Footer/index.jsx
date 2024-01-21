import P from 'prop-types';
import * as Styled from './styles';

const Footer = ({ footerHtml }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: footerHtml }} />;
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};

export default Footer;
