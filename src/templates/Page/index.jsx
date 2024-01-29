import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import Base from '../Base';
import Loading from '../../components/Loading';
import PageNotFound from '../PageNotFound';

const Page = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathName ? pathName : 'landing_page';

    async function loadData() {
      try {
        const data = await fetch(
          `http://localhost:1337/api/pages/?filters[slug]=${slug}&populate=deep`,
        );
        const json = await data.json();
        const { data: pageData } = json;

        console.log(pageData);

        if (pageData.length === 0) return setPage('not found');

        const mapPage = mapData(pageData);
        setPage(mapPage[0]);
      } catch (e) {
        console.log(e);
        setPage(undefined);
      }
    }

    loadData();
  }, []);

  if (!page) return <Loading />;

  if (page === 'not found') return <PageNotFound />;

  const { menu, footerHtml } = page;

  return (
    <Base
      links={menu.links}
      logoData={{ text: menu.logoTitle, link: menu.link, srcImg: menu.srcImg }}
      footerHtml={footerHtml}
    >
      <h1>Carregado</h1>
    </Base>
  );
};

export default Page;
