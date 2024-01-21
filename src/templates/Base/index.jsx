import P from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';

const Base = ({ links, logoData, children, footerHtml }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      {children}
      <Footer footerHtml={footerHtml} />
      <GoTop />
    </>
  );
};

Base.propTypes = {
  ...Menu.propTypes,
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
};

export default Base;
