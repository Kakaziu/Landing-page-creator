import links from '../../components/NavLink/mock';
import GridText from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: links,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
};
